import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUser from "../../Hooks/useUser";
import { useState } from "react";
import Swal from "sweetalert2";


const BuyerHome = () => {

    const [selectedSub, setSelectedSub] = useState(null);

    const axiosSecure = useAxiosSecure();

    const {userInfo, refetch: userRefetch} = useUser();

    const {data: subReview = [], refetch} = useQuery({
        queryKey: ['subReview'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/review/${userInfo.user_email}`);
            return res.data;
        }
    })

    const {data: mytask = [], refetch: taskRefetch} = useQuery({
        queryKey: ['mytask'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/mytask/${userInfo.user_email}`);
            return res.data;
        }
    })
    
    const {data: payment = []} = useQuery({
        queryKey: ['payment'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/history/${userInfo.user_email}`);
            return res.data;
        }
    })


    const totalPayment = payment.reduce((total, current) => total + current.amount , 0);


    
    

    let toatlPendingCount = 0;
    mytask.forEach(element => {
        toatlPendingCount += element.required_workers;
    });


    
    

    const handleAction = async(id, action, buyer, worker, payAmount, taskID) => {
        

        const takenAction = {
            status: action
        }

        const PayableCoin = {
            buyer: buyer,
            worker: worker,
            coin: payAmount
        }
        const reqWorker = mytask.find(task => task._id == taskID);
        
        const requiredWorkerUpadate = { required_workers: parseFloat(reqWorker.required_workers) + 1}

        
        const res = await axiosSecure.patch(`/status/${id}`, takenAction);

        if (res.data.modifiedCount) {
            if (action == 'approve') {
                const res1 = await axiosSecure.patch(`/user`, PayableCoin);
                if (res1.data.buyerRes.modifiedCount && res1.data.workerRes.modifiedCount) {
                    userRefetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Status Upadated and worker payed ${payAmount} Coin/Coins`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                
            }  else {
                const res2 = await axiosSecure.patch(`/task/${taskID}`, requiredWorkerUpadate);
                if (res2.data.modifiedCount) {
                    taskRefetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "info",
                        title: `Status Upadated and Required Worker Increased by 1. Updated Total Worker:${requiredWorkerUpadate.required_workers}`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
            refetch();


        }


    }




    

    return (
        <div>


            <div className="flex justify-center mb-8">
                <div className="stats stats-vertical lg:stats-horizontal shadow w-5/6">
                <div className="stat">
                    <div className="stat-title">Total Task Count</div>
                    <div className="stat-value">{mytask.length}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Pending Task</div>
                    <div className="stat-value">{toatlPendingCount}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Payment Paid for Coins</div>
                    <div className="stat-value">${totalPayment}</div>

                </div>
                </div>
            </div>



            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Worker Name</th>
                        <th>Task Title</th>
                        <th>Payable Amount</th>
                        <th>Submissions</th>
                        <th>Actionable Buttons</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        subReview.map((sub, index) =><tr key={sub._id}>
                        <th>{index+1}</th>
                        <td>{sub.worker_name}</td>
                        <td>{sub.task_title}</td>
                        <td>{sub.payable_amount} coin</td>
                        <th><button className="btn btn-info" onClick={()=> {
                            setSelectedSub(sub.submission_details); 
                            document.getElementById('my_modal_5').showModal()
                            }}>View</button></th>
                        <td><button className="btn btn-primary" onClick={() => handleAction(sub._id, 'approve', sub.buyer_email, sub.worker_email, sub.payable_amount, sub.task_id)}>Approve</button> <button className="btn btn-error" onClick={() => handleAction(sub._id, 'reject', sub.buyer_email, sub.worker_email, sub.payable_amount, sub.task_id)}>Reject</button></td>
                    </tr>)
                    }

                    </tbody>
                </table>
            </div>




            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Submission details</h3>
                <p className="py-4">{selectedSub}</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>


        </div>
    );
};

export default BuyerHome;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUser from "../../Hooks/useUser";
import { useState } from "react";
import Swal from "sweetalert2";


const BuyerHome = () => {

    const [selectedSub, setSelectedSub] = useState(null);

    const axiosSecure = useAxiosSecure();

    const {userInfo} = useUser();

    const {data: subReview = [], refetch} = useQuery({
        queryKey: ['subReview'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/review/${userInfo.user_email}`);
            return res.data;
        }
    })

    const handleAction = async(id, action) => {


        const takenAction = {
            status: action
        }
        
        const res = await axiosSecure.patch(`/status/${id}`, takenAction);


        if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Status Upadated",
                showConfirmButton: false,
                timer: 1500
              });
        }


    }




    

    return (
        <div>


            <div className="flex justify-center mb-8">
                <div className="stats stats-vertical lg:stats-horizontal shadow w-5/6">
                <div className="stat">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
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
                        <td><button className="btn btn-primary" onClick={() => handleAction(sub._id, 'approve')}>Approve</button> <button className="btn btn-error" onClick={() => handleAction(sub._id, 'reject')}>Reject</button></td>
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
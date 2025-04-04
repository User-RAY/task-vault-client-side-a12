import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AdminHome = () => {

    const axiosSecure = useAxiosSecure();

    const {data: adminStats = {}, refetch: statsRefetch} = useQuery({
        queryKey: ['adminStats'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/admin-stats`);
            return res.data;
        }
    })

    const {data: withdrawStatus = [], refetch} = useQuery({
        queryKey: ['withdrawStatus'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/withdraw-status`);
            return res.data;
        }
    })

    const handleStatus = async(id, email, coin, pay, worker) => {
        
        const updatedStatus = {
            status : 'approved'
        }
        const updatedCoin = {
            coin : parseFloat(coin)
        }

        const withNoti = {
            message: `Your withdrawal request has been approved by admin. You will receive $${pay} soon.`,
            ToEmail: worker,
            actionRoute: "/dashboard/worker-home",
            Time: new Date()
        }

        const res = await axiosSecure.patch(`/withdraw/${id}`, updatedStatus)

        const notificationRes = await axiosSecure.post(`/notifications`, withNoti);

        if (res.data.modifiedCount && notificationRes.data.insertedId) {
            const res1 = await axiosSecure.patch(`/user-coinWithdraw/${email}`,updatedCoin)
            if (res1.data.modifiedCount) {
                refetch();
                statsRefetch(); 
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Withdrawal Approved",
                    showConfirmButton: false,
                    timer: 1500
                    });
            }

            
        }
    }
    

    return (
        <div>

            <div className="flex justify-center mb-8">
                <div className="stats stats-vertical lg:stats-horizontal shadow w-5/6">
                <div className="stat">
                    <div className="stat-title">Total Worker Count</div>
                    <div className="stat-value">{adminStats.totalWorker}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Buyer Count</div>
                    <div className="stat-value">{adminStats.totalBuyer}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Available Coins</div>
                    <div className="stat-value">{adminStats.availableTotalCoins}</div>

                </div>
                <div className="stat">
                    <div className="stat-title">Total Payments</div>
                    <div className="stat-value">${adminStats.totalPayments}</div>

                </div>
                </div>
            </div>



            <div className="overflow-x-auto">
               { withdrawStatus.length > 0 ?  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Withdrawal Coin</th>
                        <th>Withdrawal Amount</th>
                        <th>Request Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>

                    { withdrawStatus.map((data, index) => <tr key={data._id}>
                        <th>{index + 1}</th>
                        <td>{data.worker_name}</td>
                        <td>{data.withdrawal_coin}</td>
                        <td>{data.withdrawal_amount}</td>
                        <td>{data.withdraw_date}</td>
                        <td>{data.status}</td>
                        <td><button className="btn btn-success" onClick={() => handleStatus(data._id, data.worker_email, data.withdrawal_coin, data.withdrawal_amount, data.worker_email)}>Payment Success</button></td>
                    </tr>) }



                    


                    </tbody>
                                 </table> : <div className="text-4xl text-center font-bold mt-12">CURRENTLY THERE IS NO PAYMENT REQUEST</div>
               }   
            </div>


            
        </div>
    );
};

export default AdminHome;
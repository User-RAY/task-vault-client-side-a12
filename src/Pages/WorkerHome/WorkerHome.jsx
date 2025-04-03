import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUser from "../../Hooks/useUser";


const WorkerHome = () => {

    const axiosSecure = useAxiosSecure();

    const {userInfo} = useUser();

    const {data: approvedSubmissions = []} = useQuery({
        queryKey: ['approvedSubmissions'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/submissions/${userInfo.user_email}`);
            return res.data;
        }
    })
    const {data: pendingSubmissions = []} = useQuery({
        queryKey: ['pendingSubmissions'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/pendingsub/${userInfo.user_email}`);
            return res.data;
        }
    })

    const {data: totalmySubmissions = []} = useQuery({
        queryKey: ['MySubmissions'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/submission/${userInfo.user_email}`);
            return res.data;
        }
    })

    const totalSubmissionCount = totalmySubmissions.length;
    const totalPendingSubmissionCount = pendingSubmissions.length;
    const totalEarnings = approvedSubmissions.reduce((total, current) => total + current.payable_amount, 0)
    

    

    return (
        <div>

            <div className="flex justify-center mb-8">
                <div className="stats stats-vertical lg:stats-horizontal shadow w-5/6">
                <div className="stat">
                    <div className="stat-title">Total Submissions</div>
                    <div className="stat-value">{totalSubmissionCount}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Pending Submission</div>
                    <div className="stat-value">{totalPendingSubmissionCount}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Earning</div>
                    <div className="stat-value">{totalEarnings} Coins</div>
                </div>
                </div>
            </div>

            <h2 className="mt-12 mb-8 text-2xl text-center font-medium">Approved Submissions</h2>

            <div className="overflow-x-auto">
                {  approvedSubmissions.length < 1 ? <div className="font-bold text-3xl text-center mt-5">NO APPROVED SUBMISSION YET</div> :  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Title</th>
                        <th>Payable Amount</th>
                        <th>Buyer Name</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}


                    {
                       approvedSubmissions.map((approve, index) => <tr key={approve._id}>
                            <th>{index + 1}</th>
                            <td>{approve.task_title}</td>
                            <td>{approve.payable_amount}</td>
                            <td>{approve.buyer_name[0].toUpperCase() + approve.buyer_name.slice(1)}</td>
                            <td>{approve.status[0].toUpperCase() + approve.status.slice(1)}</td>
                        </tr> )
                    }

                    </tbody>
                    </table> 
                }
            </div>

            
        </div>
    );
};

export default WorkerHome;
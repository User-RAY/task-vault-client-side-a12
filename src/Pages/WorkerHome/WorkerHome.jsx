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
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                </div>
            </div>

            <h2 className="mt-12 mb-8 text-2xl text-center font-medium">Approved Submissions</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>task_title</th>
                        <th>payable_amount</th>
                        <th>Buyer_name</th>
                        <th>status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}


                    {
                        approvedSubmissions.map((approve, index) => <tr key={approve._id}>
                            <th>{index + 1}</th>
                            <td>{approve.task_title}</td>
                            <td>{approve.payable_amount}</td>
                            <td>{approve.buyer_name}</td>
                            <td>{approve.status}</td>
                        </tr> )
                    }

                    </tbody>
                </table>
            </div>

            
        </div>
    );
};

export default WorkerHome;
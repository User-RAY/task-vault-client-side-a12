import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUser from "../../Hooks/useUser";


const MySubmissions = () => {
    

    const axiosSecure = useAxiosSecure();

    const {userInfo} = useUser();

    const {data: mySubmissions = []} = useQuery({
        queryKey: ['MySubmissions'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/submission/${userInfo.user_email}`);
            return res.data;
        }
    })



    return (
        <div>


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
                        mySubmissions.map((submission,index) => <tr key={submission._id}>
                            <th>{index+1}</th>
                            <td>{submission.task_title}</td>
                            <td>{submission.payable_amount}</td>
                            <td>{submission.buyer_name}</td>
                            <td className="font-bold">{submission.status}</td>
                        </tr> )
                    }


                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default MySubmissions;
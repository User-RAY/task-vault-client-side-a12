import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useUser from "../../Hooks/useUser";


const MyTask = () => {

    const axiosPublic = useAxiosPublic();

    const {userInfo} = useUser()

    const {data: mytask = []} = useQuery({
        queryKey: ['mytask'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/mytask/${userInfo.user_email}`);
            return res.data;
        }
    })

    console.log(mytask);
    
    


    return (
        <div>


            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>Task Image</th>
                    <th>Task Title</th>
                    <th>completion_date</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}

                {
                    mytask.map((taskInfo, index) =>                 <tr key={taskInfo._id}>
                        <th>{index+1}</th>
                        <td>
                            <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src={taskInfo.task_image_url}
                                            alt="task image" />
                                        </div>
                                    </div>
                            </div>
                        </td>
                        <td>{taskInfo.task_title}</td>
                        <td>{taskInfo.completion_date}</td>
                        <td><button className="btn btn-info">Update</button></td>
                        <td><button className="btn btn-error">Delete</button></td>
                        
                    </tr>)
                }

                </tbody>
            </table>
            </div>

            
        </div>
    );
};

export default MyTask;
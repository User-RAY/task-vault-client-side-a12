import Swal from "sweetalert2";
import useTaskList from "../../Hooks/useTaskList";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const ManageTask = () => {

    
    const [taskList, ,refetch] = useTaskList();

    const axiosSecure = useAxiosSecure();
    
    const handleDelete = (id) => {

            Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/task/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Task has been deleted.",
                            icon: "success"
                          });
                    }  
                })

            }
          });

        
        
    }


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
                    <th>required_workers</th>
                    <th>payable_amount</th>
                    <th>completion_date</th>
                    <th>Action</th>

                </tr>
                </thead>
                <tbody>
                {taskList.map((task, index) => <tr key={task._id}>
                    <th>{index + 1}</th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={task.task_image_url}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>{task.task_title}</td>
                    <td>{task.required_workers}</td>
                    <td>{task.payable_amount}</td>
                    <td>{task.completion_date}</td>
                    <td><button className="btn btn-error" onClick={() => handleDelete(task._id)}>Delete task</button></td>
                </tr>)}


                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default ManageTask;
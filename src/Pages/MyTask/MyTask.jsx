import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUser from "../../Hooks/useUser";
import UpdateForm from "../../Components/UpdateForm/UpdateForm";
import { useState } from "react";
import Swal from "sweetalert2"

const MyTask = () => {

    const [taskData, SetTaskData] = useState();

    const axiosSecure = useAxiosSecure();


    const {userInfo} = useUser()

    const {data: mytask = [], refetch} = useQuery({
        queryKey: ['mytask'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/mytask/${userInfo.user_email}`);
            return res.data;
        }
    })

    const handleUpdate = (e) => {
        e.preventDefault();

        const id = e.target.id.value;
        

        const updatedData = {
             task_title: e.target.title.value,
             task_detail: e.target.detail.value,
             submission_info: e.target.info.value,
        }
        
        const btn = document.getElementById('close');

        axiosSecure.patch(`/update/${id}`, updatedData)
        .then(res => {
            if(res.data.modifiedCount){
                refetch();
                e.target.reset();
                btn.click();
                Swal.fire({
                    title: "Congrats",
                    text: "Your task is Updated",
                    icon: "success"
                  });
            }
        
         })
    }


    const handleModal = (taskInfo) => {

        document.getElementById('my_modal_5').showModal();

        SetTaskData(taskInfo);
        
    }
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
                axiosSecure.delete(`/delete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
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
                    <th>Required Worker</th>
                    <th>Payable amount</th>
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
                        <td>{taskInfo.required_workers}</td>
                        <td>{taskInfo.payable_amount} coin</td>
                        <td>{taskInfo.completion_date}</td>
                        <td><button className="btn btn-info" onClick={() => handleModal(taskInfo)}>Update</button></td>
                        <td><button className="btn btn-error" onClick={() => handleDelete(taskInfo._id)}>Delete</button></td>
                        
                    </tr>)
                }

                </tbody>
            </table>
            </div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update {`"${taskData?.task_title}"`} Task</h3>
                    <UpdateForm handleUpdate={handleUpdate} taskData={taskData}></UpdateForm>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button id="close" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    </div>
                </div>
            </dialog>

            
        </div>
    );
};

export default MyTask;
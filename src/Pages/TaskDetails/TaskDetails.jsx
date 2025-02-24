import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useUser from "../../Hooks/useUser";
import Swal from "sweetalert2";


const TaskDetails = () => {

    const {userInfo} = useUser();

    const [taskdata, setTaskdata] = useState({});

    const {id} =useParams();
    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate();

    useEffect(()=> {
        axiosSecure.get(`/taskdetails/${id}`)
        .then(res => {
            setTaskdata(res.data);
        })

        if (taskdata?.required_workers < 1) {

            navigate('/dashboard/tasklist');
    
        }
    
    },[axiosSecure, id, taskdata, navigate])



    

    const handleSubmit = (e, title, buyerEmail) => {
        e.preventDefault();



        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; 
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = yyyy + '-' + mm + '-' + dd ;

        const info = e.target.submissionDetails.value;

        const updatedTask = {...taskdata};

        const requiredWorkerUpadate = { required_workers: parseFloat(updatedTask.required_workers) - 1}

        updatedTask.submission_details = info
        updatedTask.current_date = formattedToday
        updatedTask.status = 'pending'
        updatedTask.task_id = updatedTask._id;
        updatedTask.worker_name = userInfo.user_name;
        updatedTask.worker_email = userInfo.user_email;
        delete updatedTask._id;
        delete updatedTask.submission_info;
        delete updatedTask.task_detail;
        delete updatedTask.completion_date;
        delete updatedTask.required_workers;
        
        const submission = updatedTask;

        const notifi = {
            message: `A new submission has been made by ${userInfo.user_name} for the task ${title}. Please review it.`,
            ToEmail: buyerEmail,
            actionRoute: "/dashboard/buyer-home",
            Time: new Date()
          }
          


        axiosSecure.post('/submission', submission)
        .then(res =>{
            if(res.data.insertedId){
                axiosSecure.patch(`/task/${taskdata._id}`, requiredWorkerUpadate)
                .then( res => {
                    if (res.data.modifiedCount) {
                        axiosSecure.post('/notifications', notifi)
                        .then( res1 => {
                            if (res1.data.insertedId) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Submiited",
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                            }
                        })

                        setTaskdata(prevData => ({
                            ...prevData,
                            required_workers: prevData.required_workers - 1
                        }));
                        

                    }
                })

                e.target.reset();

            }
        })


        

    }


    return (
        <div>
            
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                    src={taskdata.task_image_url}
                    alt="task-image" className="object-cover w-full h-full"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{taskdata.task_title}</h2>
                    <p><span className="font-bold">Details:</span> {taskdata.task_detail}</p>
                    <h2 className="font-bold">submission_info: {taskdata.submission_info}</h2>
                    <h2 className="font-bold">payable_amount : {taskdata.payable_amount}$</h2>
                    <h2 className="font-bold">required_workers: {taskdata.required_workers}</h2>
                    <h2 className="font-bold">completion_date: {taskdata.completion_date}</h2>
                </div>
            </div>


            <div className="my-8">
                <form onSubmit={(e) => handleSubmit(e, taskdata.task_title, taskdata.buyer_email)}>

                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text text-xl">Submission Info</span>
                    </label>
                    <textarea  placeholder="submission_info" name="submissionDetails" className="textarea textarea-bordered textarea-lg " required/>
                    </div>

                    <div className="form-control mt-6">
                            <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>

                </form>
            </div>


        </div>
    );
};

export default TaskDetails;
import PropTypes from "prop-types";

const UpdateForm = ({handleUpdate, taskData={}}) => {

    

    return (
        <div>


            <div className="card bg-base-100 w-4/5 lg:w-3/4 mx-auto">
                <form className="card-body p-0" onSubmit={handleUpdate}>
                <input type="text" name='id' hidden defaultValue={taskData._id} className="input input-bordered" required/>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Title</span>
                    </label>
                    <input type="text" name='title' placeholder={taskData.task_title}  className="input input-bordered" required/>
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Detail</span>
                    </label>
                    <input type="text" name='detail' placeholder={taskData.task_detail}  className="input input-bordered" required/>
                    </div>



                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Submission Info</span>
                    </label>
                    <input type="text" name='info' placeholder={taskData.submission_info} className="input input-bordered" required/>
                    </div>


                    <div className="flex justify-center items-center mt-6">
                    <button className="btn btn-primary w-1/2">Update Task</button>
                    </div>
                    
                </form>

                
                <div className="modal-action justify-center">
                    <form method="dialog" className="w-1/2">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn bg-gray-500 w-full" id='close'>Cancel</button>
                    </form>
                </div>
            </div>


            
        </div>
    );
};

UpdateForm.propTypes = {
    handleUpdate: PropTypes.func,
    taskData: PropTypes.object,
}

export default UpdateForm;
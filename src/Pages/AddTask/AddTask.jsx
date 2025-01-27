import { useForm } from "react-hook-form";

const AddTask = () => {


    const { register,  handleSubmit, formState: { errors } } = useForm();



    const handleAdd = () => {
        

      }


    return (
        <div>

            <div className="min-h-screen flex flex-col items-center w-11/12 mx-auto">
                <h1 className="text-5xl mb-4 "> Add Task</h1>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form className="card-body text-black" onSubmit={handleSubmit(handleAdd)}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
    
    
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input type="text" {...register('task_title', {required:"Please fill out this field", minLength:2})} placeholder="ex: watch my YouTube video and make a comment" className="input input-bordered" />
                            <div className='min-h-10 xl:min-h-6  mt-1 text-red-600 text-sm'>{errors.task_title?.message || errors.task_title?.type && <span>Title must be at least 2 characters long</span> }</div>
                            </div>

                                
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Detail</span>
                            </label>
                            <input type="text" {...register('task_detail', {required:"Please fill out this field", minLength:2})} placeholder="provide detail description" className="input input-bordered" />
                            <div className='min-h-10 xl:min-h-6  mt-1 text-red-600 text-sm'>{errors.task_detail?.message || errors.task_detail?.type && <span>Title must be at least 2 characters long</span> }</div>
                            </div>
    

    
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Required Workers</span>
                            </label>
                            <input type="number" {...register('required_workers', {required:"Please fill out this field", min: 1})}  placeholder="Total number of workers needed ex. 100" className="input input-bordered"/>
                            <div className='min-h-10 xl:min-h-6 mt-1 text-red-600 text-sm'>{errors.required_workers?.message || errors.required_workers?.type && <span>Provide duration in minutes. it must be greater than 1 </span> }</div>
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Payable Amount</span>
                            </label>
                            <input type="number" {...register('payable_amount', {required:"Please fill out this field", min: 1})}  placeholder="Amount will pay to each worker  ex. 10" className="input input-bordered"/>
                            <div className='min-h-10 xl:min-h-6 mt-1 text-red-600 text-sm'>{errors.payable_amount?.message || errors.payable_amount?.type && <span>Provide duration in minutes. it must be greater than 1</span> }</div>
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Completion Date</span>
                            </label>
                            <input type="date" {...register('completion_date', {required:"Please fill out this field"})} placeholder="Movie Title" className="input input-bordered" />
                            <div className='min-h-10 xl:min-h-6  mt-1 text-red-600 text-sm'>{errors.completion_date?.message}</div>
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Submission Info</span>
                            </label>
                            <input type="text" {...register('submission_info', {required:"Please fill out this field", minLength:2})} placeholder="what to submit like screenshot or proof" className="input input-bordered" />
                            <div className='min-h-10 xl:min-h-6  mt-1 text-red-600 text-sm'>{errors.submission_info?.message || errors.submission_info?.type && <span>Title must be at least 2 characters long</span> }</div>
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Image</span>
                            </label>
                            <input type="file" {...register('task_image_url', {required:"Please fill out this field"})} className="input input-bordered" />
                            <div className='min-h-10 xl:min-h-6  mt-1 text-red-600 text-sm'>{errors.task_image_url?.message }</div>
                            </div>
    

                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="ADD TASK" className="btn btn-primary" />
                        </div>

                    </form>               
                </div>


            </div>
            
        </div>
    );
};

export default AddTask;
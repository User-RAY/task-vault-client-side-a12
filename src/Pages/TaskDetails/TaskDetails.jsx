

const TaskDetails = () => {

    const handleSubmit = () => {

    }


    return (
        <div>
            
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                    src="https://i.ibb.co.com/nkp1jR5/image.png"
                    alt="task-image" className="object-cover w-full h-full"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Watch my YouTube video and make a comment</h2>
                    <p><span className="font-bold">Details:</span> Watch a 10-minute video on my YouTube channel and leave a relevant comment below the video</p>
                    <h2 className="font-bold">submission_info: Screenshot of your comment along with the video timecode.</h2>
                    <h2 className="font-bold">payable_amount : 1$</h2>
                    <h2 className="font-bold">required_workers: 10</h2>
                    <h2 className="font-bold">completion_date: 2201-392-2 </h2>
                </div>
            </div>


            <div className="my-8">
                <form onSubmit={handleSubmit}>

                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text text-xl">Submission Info</span>
                    </label>
                    <textarea  placeholder="submission_info" className="textarea textarea-bordered textarea-lg " />
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
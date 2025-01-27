

const MyTask = () => {
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
                <tr>
                    <th>1</th>
                    <td>
                        <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                        </div>
                    </td>
                    <td>Title</td>
                    <td>completion_date</td>
                    <td>Update</td>
                    <td>Delete</td>
                    
                </tr>

                    {/* row 1 */}
                    <tr>
                    <th>2</th>
                    <td>
                        <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                        </div>
                    </td>
                    <td>Title</td>
                    <td>completion_date</td>
                    <td>Update</td>
                    <td>Delete</td>
                    
                </tr>

                                {/* row 1 */}
                                <tr>
                    <th>3</th>
                    <td>
                        <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                        </div>
                    </td>
                    <td>Title</td>
                    <td>completion_date</td>
                    <td>Update</td>
                    <td>Delete</td>
                    
                </tr>

                </tbody>
            </table>
            </div>

            
        </div>
    );
};

export default MyTask;
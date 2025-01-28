

const ManageTask = () => {
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
                    <td>Give 5 google review</td>
                    <td>10</td>
                    <td>15</td>
                    <td>2023-03-16</td>
                    <td><button className="btn btn-error">Delete task</button></td>
                </tr>
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
                    <td>Give 5 google review</td>
                    <td>10</td>
                    <td>15</td>
                    <td>2023-03-16</td>
                    <td><button className="btn btn-error">Delete task</button></td>
                </tr>
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
                    <td>Give 5 google review</td>
                    <td>10</td>
                    <td>15</td>
                    <td>2023-03-16</td>
                    <td><button className="btn btn-error">Delete task</button></td>
                </tr>
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
                    <td>Give 5 google review</td>
                    <td>10</td>
                    <td>15</td>
                    <td>2023-03-16</td>
                    <td><button className="btn btn-error">Delete task</button></td>
                </tr>

                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default ManageTask;
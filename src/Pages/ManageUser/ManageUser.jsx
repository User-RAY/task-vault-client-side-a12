
const ManageUser = () => {
    return (
        <div>

            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>User photo</th>
                    <th>role</th>
                    <th>coin</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>dk@kf.com</td>
                    <td>Picture</td>
                    <td>Buyer</td>
                    <td>200</td>
                    <td><button className="btn btn-error">Delete user</button></td>
                </tr>
                {/* row 1 */}
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>dk@kf.com</td>
                    <td>Picture</td>
                    <td>Buyer</td>
                    <td>200</td>
                    <td><button className="btn btn-error">Delete user</button></td>
                </tr>
                {/* row 1 */}
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>dk@kf.com</td>
                    <td>Picture</td>
                    <td>Buyer</td>
                    <td>200</td>
                    <td><button className="btn btn-error">Delete user</button></td>
                </tr>



                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default ManageUser;
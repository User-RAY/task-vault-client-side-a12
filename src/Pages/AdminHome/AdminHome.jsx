

const AdminHome = () => {
    return (
        <div>

            <div className="flex justify-center mb-8">
                <div className="stats stats-vertical lg:stats-horizontal shadow w-5/6">
                <div className="stat">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                </div>
            </div>



            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Withdrawal Amount</th>
                        <th>Request Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>200</td>
                        <td>2222-09-22</td>
                        <td>pending</td>
                        <td><button className="btn btn-success">Payment Success</button></td>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>200</td>
                        <td>2222-09-22</td>
                        <td>pending</td>
                        <td><button className="btn btn-success">Payment Success</button></td>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>200</td>
                        <td>2222-09-22</td>
                        <td>pending</td>
                        <td><button className="btn btn-success">Payment Success</button></td>
                    </tr>
                    


                    </tbody>
                </table>
            </div>


            
        </div>
    );
};

export default AdminHome;
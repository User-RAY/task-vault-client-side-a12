

const BuyerHome = () => {
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
                        <th>Worker Name</th>
                        <th>Task Title</th>
                        <th>Payable Amount</th>
                        <th>Submissions</th>
                        <th>Actionable Buttons</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>10 coin</td>
                        <th><button className="btn btn-info">View</button></th>
                        <td><button className="btn btn-primary">Approve</button> <button className="btn btn-error">Reject</button></td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Desktop Support Techniciann</td>
                        <td>20 coin</td>
                        <th><button className="btn btn-info">View</button></th>
                        <td><button className="btn btn-primary">Approve</button> <button className="btn btn-error">Reject</button></td>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Tax Accountant</td>
                        <td>15 coin</td>
                        <th><button className="btn btn-info">View</button></th>
                        <td><button className="btn btn-primary">Approve</button> <button className="btn btn-error">Reject</button></td>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Desktop Support Techniciann</td>
                        <td>10 coin</td>
                        <th><button className="btn btn-info">View</button></th>
                        <td><button className="btn btn-primary">Approve</button> <button className="btn btn-error">Reject</button></td>
                    </tr>

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default BuyerHome;
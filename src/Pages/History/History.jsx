

const History = () => {
    return (
        <div>

            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>Payment Date</th>
                    <th>Coins Purchased</th>
                    <th>Amount Paid</th>
                    <th>Transaction ID</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <th>1</th>
                    <td>2025-01-25 12:34	</td>
                    <td>10</td>
                    <td>$1</td>
                    <td>tx_1Iy2dfJvC9pXQ</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>2025-01-25 12:34	</td>
                    <td>10</td>
                    <td>$1</td>
                    <td>tx_1Iy2dfJvC9pXQ</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>2025-01-25 12:34	</td>
                    <td>10</td>
                    <td>$1</td>
                    <td>tx_1Iy2dfJvC9pXQ</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>2025-01-25 12:34	</td>
                    <td>10</td>
                    <td>$1</td>
                    <td>tx_1Iy2dfJvC9pXQ</td>
                </tr>

                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default History;
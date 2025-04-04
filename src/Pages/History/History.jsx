import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUser from "../../Hooks/useUser";


const History = () => {

    const [paymentHistory, setPaymentHistory] = useState();

    const axiosSecure = useAxiosSecure();
    const {userInfo} = useUser();

    useEffect(() => {
        axiosSecure.get(`/history/${userInfo.user_email}`)
        .then(res => {
            setPaymentHistory(res.data);
        })
    }, [axiosSecure, userInfo])


    return (
        <div className="mb-6">

            <div className="overflow-x-auto ">
            { paymentHistory?.length > 0 ? <table className="table">
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

                {
                    paymentHistory?.map((history, index) =><tr key={history._id}>
                        <th>{index + 1}</th>
                        <td>{history.date}</td>
                        <td>{history.purchasedCoin}</td>
                        <td>${history.amount}</td>
                        <td>{history.paymentID}</td>
                    </tr>)
                }


                </tbody>
                                         </table> : <div className="text-4xl text-center font-bold mt-12">YOU HAVE NOT MADE ANY PAYMENTS YET</div> 
            }
            </div>
            
        </div>
    );
};

export default History;
import { useState } from "react";
import useUser from "../../Hooks/useUser";
import moment from 'moment';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Withdraw = () => {

    const [inputValue, setInputValue] = useState(0);
    const [method, setMethod] = useState(false);
    const [check, setCheck] = useState(false);
    const [limit, setLimit] = useState(false);
    const {userInfo} = useUser();

    const axiosSecure = useAxiosSecure();


    const handleInput = (e) => {

        const val = e.target.value;

        if (val) {
            setInputValue(parseFloat(val)/20);
        } else {
            setInputValue(0);
        }

        if (val < 20 && val !== '') {
            setCheck(true);
            
        } else {
            setCheck(false);
        }

        if (val > userInfo.coin) {
            setLimit(true);
        } else {
            setLimit(false);
        }

    }


    
    const handleAdd = async(e) => {

        e.preventDefault();

        const payMethod = e.target.payMethod.value;
        


        if (payMethod == 'default') {
            setMethod(true);
            return;
        }
        setMethod(false);

        const coinWithdraw = e.target.coinWithdraw.value;
        const amountWithdraw = e.target.amountWithdraw.value;
        const accountNumber = e.target.accNum.value;



        const withdrawalData = {
            worker_email: userInfo.user_email,
            worker_name: userInfo.user_name,
            withdrawal_coin: parseFloat(coinWithdraw),
            withdrawal_amount: parseFloat(amountWithdraw),
            payment_system :payMethod,
            account_number: accountNumber,
            withdraw_date:  moment().format('MMMM Do YYYY, h:mm:ss a'),
            status: 'pending'
        }

        const res = await axiosSecure.post('/withdraw', withdrawalData);

        if(res.data.insertedId){
            e.target.reset();
            setInputValue(0);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Withdrawal Requested",
                showConfirmButton: false,
                timer: 1500
                });
            }



    }
    
    return (
        <div>

                <div className="mx-auto w-2/3 mb-6 md:flex">
                    <div className="stats shadow w-full">
                    <div className="stat text-center">
                        <div className="stat-title">Current Coins</div>
                        <div className="stat-value">{userInfo.coin}</div>
                    </div>
                    </div>
                    <div className="stats shadow w-full">
                    <div className="stat text-center">
                        <div className="stat-title">Withdrawl amount ($)</div>
                        <div className="stat-value">${parseFloat(userInfo.coin)/20}</div>
                    </div>
                    </div>
                </div>

            <h1 className='text-5xl font-bold text-center'>WithDraw</h1>

            <div className="text-center my-8">
                <h2>20 Coins  = 1 Dollar</h2>
                <p>User should have minimum of 200 coins (10$) to make any amount (minimum 20 coin or 1$) of withdrawl </p>
            </div>

            <div className="card bg-base-100 w-4/5 lg:w-3/4 mx-auto">
            <form className="card-body p-0 mb-8" onSubmit={handleAdd}>
            

            <div className="form-control">
            <label className="label">
                <span className="label-text">Coin To WithDraw</span>
            </label>
            <input type="number" name='coinWithdraw'  className="input input-bordered" onChange={handleInput} required/>
            </div>
            <h2 className={`text-red-500 ${check ? '': 'hidden'} text-xs` }>Minimum withdrawl amount is 20 coins</h2>
            <h2 className={`text-red-500 ${limit ? '': 'hidden'} text-xs` }>You do not have Sufficient coin</h2>
            <h2 className={`mb-4 ${check ? 'hidden': ''}  `}></h2>


            <div className="form-control">
            <label className="label">
                <span className="label-text">Withdraw_amount</span>
            </label>
            <input type="number" name='amountWithdraw' value={inputValue} readOnly className="input input-bordered" required/>
            </div>


            <div className="form-control">
            <label className="label">
                <span className="label-text">payment mehoth</span>
            </label>

                <select name="payMethod" defaultValue={'default'} className="input input-bordered appearance-auto" required>
                    <option value="default" disabled>Please select</option>
                    <option value="bkash">Bkash</option>
                    <option value="nogod">Nogod</option>
                    <option value="upay">Upay</option>
                </select>

            </div>
            <h2 className={`text-red-500 ${method ? '': 'hidden'} text-xs` }>Please Select Payment Method</h2>
            <h2 className={`mb-4 ${method ? 'hidden': ''}  `}></h2>
            <div className="form-control">
            <label className="label">
                <span className="label-text">account number</span>
            </label>
            <input type="number" name='accNum'  className="input input-bordered" required/>
            </div>


            <div className="flex justify-center items-center mt-6">
            <button className="btn btn-primary w-1/2" disabled={(userInfo?.coin < 200) || check  ? true : false}>withdraw</button>
            </div>
            
            </form>

            <h1 className={`${userInfo?.coin < 200 ? '' : 'hidden'} text-red-600 text-center mb-6`}>Insufficient Coin, Minimum 200 Current coin required</h1>
            </div>

            
        </div>
    );
};

export default Withdraw;
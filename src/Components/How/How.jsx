import { FaUserPlus } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";



const How = () => {

    const {userInfo} = useUser();

    return (
        <div>

            <div className="bg-gray-100 py-16">
                <div className="px-6  text-center">
                    <p className="text-lg text-gray-600 mb-10">
                    Follow these simple steps to get started on our platform.
                    </p>
                    <div className="grid md:grid-cols-4 gap-8">


                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                        <span className="text-blue-500 text-5xl">
                        <FaUserPlus />
                        </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        Step 1: Register
                        </h3>
                        <p className="text-gray-600">
                        Sign up as a Worker or Buyer and set up your profile.
                        </p>
                    </div>


                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                        <span className="text-green-500 text-5xl">
                        <FaTasks />
                        </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        Step 2: Post or Apply
                        </h3>
                        <p className="text-gray-600">
                        Buyers post tasks, and Workers apply to complete them.
                        </p>
                    </div>



                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                        <span className="text-yellow-500 text-5xl">
                        <FaCoins />
                        </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        Step 3: Earn Rewards
                        </h3>
                        <p className="text-gray-600">
                        Workers complete tasks and earn coins. Buyers get tasks done.
                        </p>
                    </div>




                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                        <span className="text-red-500 text-5xl">
                        <FaWallet />
                        </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        Step 4: Withdraw or Refill
                        </h3>
                        <p className="text-gray-600">
                        Workers withdraw earnings, and Buyers purchase more coins.
                        </p>
                    </div>
                    </div>
                    <div className="mt-10">
                    <Link to={(userInfo === undefined) ? 'register' : (userInfo?.role === 'worker') ? '/dashboard/worker' : (userInfo.role === 'buyer') ? '/dashboard/buyer' : '/'}>
                        <button className="btn bg-blue-500">
                            Get Started Now!
                        </button>
                    </Link>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default How;
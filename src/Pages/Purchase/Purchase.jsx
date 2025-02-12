import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../Components/Payment/CheckoutForm";
import { useContext } from "react";
import { PriceContext } from "../../Provider/PriceProvider";



const stripPromise = loadStripe(import.meta.env.VITE_paymentGatewayKey); 

const Purchase = () => {

    const {price, coins} = useContext(PriceContext);

    return (
        <div>
            <h1 className="text-2xl text-yellow-700 text-center mb-4 font-semibold">Purchasing Coin amount: {coins}</h1>
            <h1 className="text-2xl text-blue-600 text-center mb-12 font-semibold">Total Cost: {price}$</h1>
            <Elements stripe={stripPromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Purchase;
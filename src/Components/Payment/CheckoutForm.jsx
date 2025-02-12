import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useUser from '../../Hooks/useUser';
import { PriceContext } from '../../Provider/PriceProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from 'moment';

const CheckoutForm = () => {


    const [error, setError] = useState('');
    const [disable, setDisable] = useState(false);

    const [clientSecret, setClientSecret] = useState('');

    const {userInfo, refetch} = useUser();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = useAxiosSecure();

    const {price, coins} = useContext(PriceContext);

    

    useEffect(() => {
        if (price > 0.50) {
            axiosSecure.post('/create-payment-intent', {price: price} )
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
        } else{
            navigate('/dashboard/purchase');
        }

    }, [axiosSecure, price, navigate])


    const handleSubmit = async(e) => {

        e.preventDefault();

        setDisable(true);

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card,
        });


        if (error) {
            console.log('error', error);
            setError(error.message);
            
        } else {
            console.log('paymentMethod', paymentMethod);
            setError('');
        }

        const { paymentIntent, error: confiremCardError } = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: card,
                billing_details: {
                    email: userInfo?.user_email || 'anonymous',
                    name: userInfo?.user_name || 'anonymous'
                }
            }
        })

        if (confiremCardError) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: confiremCardError.message,
                showConfirmButton: false,
                timer: 2500
              });
            card.clear();
            setDisable(false);
        } else {
            card.clear();
            setDisable(false);
            if (paymentIntent.status == 'succeeded') {

                const date = moment().format('MMMM Do YYYY, h:mm:ss a');
                const payInfo = {
                   paymentID: paymentIntent.id,
                   email: userInfo?.user_email,
                   amount: parseFloat(paymentIntent.amount)/100,
                   date: date,
                   currentCoin: userInfo.coin,
                   purchasedCoin: coins,
                }

                axiosSecure.post('/payment', payInfo )
                .then(res => {
                    if (res.data.paymentInsert.insertedId && res.data.coinUpdate.modifiedCount) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your Payment is complete",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          refetch();
                        navigate('/dashboard/history');
                    }
                    
                });
                
            }




        }


    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            "::placeholder": {
                                color:'#aab7c4'
                            },
                        },
                        invalid: {
                            color: '#9e2146'
                        },
                    },
                }}
                >
                </CardElement>
                <button className='btn btn-primary mt-4' type='submit' disabled={!stripe || !clientSecret || disable}>Pay</button>
            </form>

            <h2 className='text-red-500 mt-4'>{error}</h2>
            
        </div>
    );
};

export default CheckoutForm;
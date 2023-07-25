import { CardElement, useElements, useStripe,  } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
// import axios from "axios";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useClass from "../../../../hooks/useClass";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({price}) => {
    
    const { user } = useContext(AuthContext)
    const [ classes ] = useClass();
    const navigate = useNavigate();

    const classesRemoveId = classes.map(c => {
        const {_id, ...rest} = c;
        return rest;
    })

    console.log(classesRemoveId);

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price }).then((res) => {
          setClientSecret(res.data.clientSecret);
        });
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if( !stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null) {
            return
        }

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } 
        else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);

            if(paymentMethod.id) {
                axiosSecure.post(`/enroll/${user.email}`, classesRemoveId)
                .then(res => {
                    console.log(res.data)

                    if(res.data.deleteResult.deletedCount > 0 && res.data.result.insertedCount) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/dashboard/enrollClass')
                    }
                })
            }
        }

        // confirm payment
        const { paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.name || 'unknown',
                        email: user?.email || 'anonymous',
                    },
                },
            },
        );

    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button className="btn mt-5 btn-primary btn-sm" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            { cardError && <p className="text-red-600 mt-5 ml-8">{cardError}</p> }
        </>
    );
};

export default CheckoutForm;

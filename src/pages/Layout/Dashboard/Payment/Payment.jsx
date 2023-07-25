
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useClass from "../../../../hooks/useClass";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [ classes ] = useClass()
    const price = classes.reduce((sum, currentPrice) => {
        return sum + currentPrice.price;
    }, 0);
    console.log(classes);

    return (
        <div className="w-7/12 mx-auto my-16">
            <Helmet>
                <title>FitZone || Payment</title>
            </Helmet>

            <SectionTitle
                subHeading="Please Process"
                heading="Payment"
            ></SectionTitle>

            <h2>Single Card Payment</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;
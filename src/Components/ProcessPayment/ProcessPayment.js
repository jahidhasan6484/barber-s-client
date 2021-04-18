import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51IhYDdK3Desf6pZ47AeWiHdSl3hAWwj9eIUiaLsN2aMSKoHWGmhywResC7y95OGZIwTnPHGSc71Mgc9h5tHCRz5M00e22DPrvs');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            {/* <SplitCardForm /> */}
            <SimpleCardForm />
        </Elements>
    );
};

export default ProcessPayment;
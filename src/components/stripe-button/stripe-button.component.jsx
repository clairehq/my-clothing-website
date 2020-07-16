import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; //因为stripe是按照cents计算的
    const publishableKey = 'pk_test_51H50C1AiiJjhfHt47sikxV6LneDTQLOfvvHhG3LniL9X9sAKc3HIQKpBdvk12B2GvtdrJyVhW8zPhsKqoAbLnm1Z00SqcTYy3U';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now' // text inside the Stripe button
            name='My Clothing Website'  // the pop-in header title
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da' // the pop-in header image
            description={`Your total is $${price}`} // the pop-in header subtitle
            amount={priceForStripe}
            panelLabel='Pay Now' // prepended to the amount in the bottom pay button
            token={onToken} // submit callback
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
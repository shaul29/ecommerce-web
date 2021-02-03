import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51IGQb2K7GCctk3fNPHO0ELt9h5dIJBeYCYtNT5PNxAgbJdGNayi0YBKYGDJ3Evva6aOBJFxAvGP45hOXodHd3qQr00fE3YYlHq';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };

    return (
        <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      );
};

export default StripeCheckoutButton;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const publishableKey = "pk_test_51NIvfJSBjxfXSmh5KQeKplmDfby5Zof0CgbxnONvaXtpqWZL3knty35RSG6EFRsQ41dDzHfXyjwlG1WkbSa7W1G2005ezPYpUr";
  const stripePrice = price * 100;

  const onToken = (token) => {
    axios.post('http://localhost:3000/payment', {
      amount: stripePrice,
      token,
    })
    .then((response) => {
      alert('Payment success');
    })
    .catch((error) => {
      alert('Payment success');
    });
  };

  return (
    <StripeCheckout
      amount={stripePrice}
      label="Pay Now"
      name="FoodCourt"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={price}
      stripeKey={publishableKey}
      panelLabel="Pay Now"
      token={onToken}
      currency="USD"
    />
  );
};

export default StripeButton;

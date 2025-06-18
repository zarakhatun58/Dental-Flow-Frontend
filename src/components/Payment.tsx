import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { BASE_URL } from '../services/Apis';

const stripePromise = loadStripe("pk_test_51RaaB2QpJYqNVrlfiZmHRPSkE1fLvrwQv9ZmRS2dxGB2Udsp6rxjPyWyYwVICMBWEZcqC2AaqmfvLtxx8GI8yd1T00WvxWAttL");

const payment = () => {
 const handleCheckout = async () => {
    try {
      const response = await fetch(`${BASE_URL}/payments/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 5000,
        }),
      });

      const session = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        console.error("Stripe failed to load");
        return;
      }

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };


  return (
    <div>
      <button onClick={handleCheckout}>Pay $50 for Cleaning</button>
    </div>
  );
};


export default payment;
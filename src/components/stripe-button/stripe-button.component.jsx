import React from 'react'
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_rTkfPNqrUhpNfBlCJh89LScN00XRL7voP8'

    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout label='Pay Now' 
        name='blixtBits' 
        billingAddress 
        shippingAddress 
        image='https://www.svgrepo.com/show/49366/lightning.svg' 
        currency='GBP'
        description={`Your total is £${price}`} 
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
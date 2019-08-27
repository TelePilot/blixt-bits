import React from 'react'
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import styled from 'styled-components'

import CheckOutItem from "../../components/checkout-item/checkout-item.component"
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors"
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"

const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    button {
        margin-left: auto;
        margin-top: 50px;
      }
`
const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    
    `
      
const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }`

const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;`

const TestWarning = styled.div`
    text-align: center;
    margin: 40px;
    font-size: 24px;
    color: red;`


    
const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => 
                <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                )
        }
        <Total>
            <span>{`TOTAL: £${total}`}</span>
        </Total>
        <TestWarning> *Please use the following test credit card for payments<br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123*</TestWarning>
        <StripeCheckoutButton price={total} />

    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
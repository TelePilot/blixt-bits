import React from 'react'
import styled from 'styled-components'

import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";


const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`
const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;`
const CheckoutImage = styled.img`
    width: 100%;
    height: 100%;`

const ItemPrice = styled.span`
    width: 23%;`

const ItemName = styled.span`
    width: 23%;`

const ItemQuantity = styled.span`
    width: 23%;
    display: flex`

const Arrow = styled.div`
    cursor: pointer
`
const Value = styled.span`
    margin: 0 10px`

const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer`

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <CheckoutImage src={imageUrl} alt="item"  />
        </ImageContainer>
        <ItemName>{name}</ItemName>
        <ItemQuantity>
            <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={() => addItem(cartItem)} >&#10095;</Arrow>
        </ItemQuantity>
        <ItemPrice>£{price}</ItemPrice>
        <RemoveButton onClick={() => clearItem(cartItem)}>
            &#10005;
        </RemoveButton>
    </CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
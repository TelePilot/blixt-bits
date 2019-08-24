import React from 'react'
import styled from 'styled-components'

const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;`

const ShoppingItemImage = styled.img`
    width: 30%`

const ShoppingItemDetailsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
  `

const ItemName = styled.span`
    font-size: 16px;`

const ItemPrice = styled.span`
`    

const CartItem = ({item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <ShoppingItemImage src={imageUrl} alt='item'/>
        <ShoppingItemDetailsContainer className="item-details">
            <ItemName>{name}</ItemName>
            <ItemPrice>
                {quantity} x £{price}</ItemPrice>
        </ShoppingItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIconButton = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const ShoppingBagIcon = styled(ShoppingIcon)`
    width: 24px;
    height: 24px;
`
const ItemCountSpan = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;`

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconButton onClick={toggleCartHidden}>
        <ShoppingBagIcon className="shopping-icon"/>
        <ItemCountSpan className="item-count">{itemCount}</ItemCountSpan>
    </CartIconButton>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

import { signOutStart } from '../../redux/user/user.actions'

import { ReactComponent as Logo } from '../../assets/crown.svg'


const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px
    }`

const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
`

const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`

const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`



const Header = ({ currentUser, hidden, signOutStart }) => (
    
    <HeaderContainer>
        
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink  to="/checkout">
                CHECKOUT
            </OptionLink>
            {
                currentUser ? 
                <OptionLink as='div' onClick={signOutStart}>
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
        
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
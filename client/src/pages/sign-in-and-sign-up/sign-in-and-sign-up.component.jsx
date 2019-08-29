import React from 'react'
import styled from 'styled-components'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpContainer = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    
    @media screen and (max-width: 800px) {
        width: auto;
        flex-flow: column;
        align-items: center;
    }`

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
)

export default SignInAndSignUpPage

import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'


const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width:800px) {
        margin-bottom: 50px;
    }`

const Title = styled.h2`
    margin: 10px 0;`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;`   
    
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: ''})
    const { email, password } = userCredentials
    const handleSubmit = async event => {
        event.preventDefault()


        
        emailSignInStart(email, password)
    }
   const handleChange = event => {
        const { value, name } = event.target

        setCredentials({
            ...userCredentials, [name]: value
        })
    }
    
        return(
            <SignInContainer>
                <Title>I Already Have An Account</Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                    name="email" 
                    type="email" 
                    value={email} 
                    required 
                    handleChange={handleChange}
                    label="email"
                    />
                 
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    required 
                    handleChange={handleChange}
                    label="password"
                    />
                    
                    <ButtonsContainer>
                        <CustomButton type="submit" >
                            Sign In
                        </CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >
                            Sign In with Google
                        </CustomButton>
                    </ButtonsContainer>
                   
                </form>
            </SignInContainer>
        )
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)
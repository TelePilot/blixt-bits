import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'


const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;`

const Title = styled.h2`
    margin: 10px 0;`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;`   
    
class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state
        const { emailSignInStart } = this.props
        
        emailSignInStart(email, password)
    }
    handleChange = event => {
        const { value, name } = event.target

        this.setState({
            [name]: value
        })
    }
    render() {
    const { googleSignInStart } = this.props
    const { email, password } = this.state
        return(
            <SignInContainer>
                <Title>I Already Have An Account</Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email" 
                    type="email" 
                    value={email} 
                    required 
                    handleChange={this.handleChange}
                    label="email"
                    />
                 
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    required 
                    handleChange={this.handleChange}
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

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)
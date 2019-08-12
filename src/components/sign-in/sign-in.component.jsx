import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({
            email: '', password: ''
        })
    }
    handleChange = event => {
        const { value, name } = event.target

        this.setState({
            [name]: value
        })
    }
    render() {
    const { email, password} = this.state
        return(
            <div className="sign-in">
                <h2 className="title">I Already Have An Account</h2>
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
                    
                    <div className="buttons">
                        <CustomButton type="submit" >
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            Sign In with Google
                        </CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }

}
export default SignIn
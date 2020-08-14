import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, Title, ButtonContainer } from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password: ''
        };
    }

    handleSubmit = event => {
       event.preventDefault();

        this.setState({ email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });  
    }

    render() {
        return(
            <SignInContainer>
                <Title>I already have an account</Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='email'
                    required />

                    <FormInput 
                    name="password" 
                    type="password"
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    required />
                    <ButtonContainer>
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;
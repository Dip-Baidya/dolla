import React from 'react';
import { Container, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text,Form } from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to= "/">dip</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign In your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required></FormInput>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required></FormInput>
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;
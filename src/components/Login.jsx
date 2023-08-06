import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogo1 src="/images/cta-logo-one.svg" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
            Disney+ Hotstar is the streaming home of your favourite stories and more. With movies & series from Disney, Pixar, Marvel, Star Wars, National Geographic and Star. From Hollywood award-winners to Asian content, discover new favourites on Disney+ Hotstar.
            </Description>
            <CTALogo2 src="/images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    poistion: relative;
    height: calc(100vh-70px);
    display: flex;
    align-items: top;
    justify-content: center;
    

    &:before {
       background-position: top;
       background-size: cover;
       background-repeat: no-repeat;
       background-image: url("images/login-background.jpg");
       content: "";
       position: absolute;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       z-index: -1;
       opacity: 0.8;

    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items:center;

`

const CTALogo1 =styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    text-align: center;
`

const CTALogo2 = styled.img`
    width: 90%;
`
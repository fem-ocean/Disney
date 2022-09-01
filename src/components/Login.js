import styled from "styled-components";
import React from 'react';

function Login(props) {
  return (
    <Container>
        <Content>
            <CTA>
                <CtaLogoOne src="./../../images/cta-logo-one.svg" alt="" />
                <SignUp>GET IT ALL THERE</SignUp>
            </CTA>
            <BgImage />
        </Content>
    </Container>
  )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    margin-bottom: 10vw;
    /* border: 1px solid red; */
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-self: start;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

const BgImage =styled.div`
    /* width: 100%; */
    height: 100%;
    background-image: url("images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap:wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid green;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;

`

const CtaLogoOne = styled.img`
    width: 100%;
    border: 1px solid red;
    margin-bottom: 12px;
    min-height: 1px;
    max-width: 600px;
`

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
    }
`

export default Login
import React from 'react'
import styled from "styled-components"

const Content = () => {
    return (
        <Container>
           <Holder>
           <Design>
                <Text>HI THERE 😄 I'M</Text>
                <Name>Osazie <br/> Uyiekpen</Name>
                <Software>developer + tutor</Software>
                <Intro>I’m a professional front end developer and also a tutor  based in Lagos</Intro>
                {/* <ButtonHolder>
                    <a href="/images/file.jpeg" download> Hire me </a>
                </ButtonHolder> */}
            </Design>
            <ImageHolder>
                <Img src="./Images/hero.png" alt="images"/>
            </ImageHolder>
           </Holder>
        </Container>
    )
}

export default Content

const Container = styled.div`
height: 600px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #212121;
overflow: hidden;

@media (max-width: 768px) {
height: 500px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #212121;


}
@media (max-width: 480px) {
height: 500px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #212121;


}
@media (max-width: 479px) {
height: 500px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #212121;


}
`
const Holder = styled.div`
display: flex;
height: 500px;
width: 90vw;
flex-direction: column;
margin-top: 100px;
font-weight: bold;
flex-direction: row;
@media (max-width: 768px) {
display: flex;
justify-content: center;
align-items: center;
height: 500px;
width: 90vw;
flex-direction: column;
margin-top: 60px;
font-weight: bold;
flex-direction: row;


}
@media (max-width: 468px) {
display: flex;
justify-content: center;
align-items: center;

height: 500px;
width: 90vw;
flex-direction: column;
margin-top: 60px;
font-weight: bold;
flex-direction: row;


}

`

const Design = styled.div`
display: flex;
height: 500px;
width: 100%;
flex-direction: column;
@media (max-width: 768px) {
display: flex;
height: 500px;
justify-content: center;
width: 100%;
align-items: center;
text-align:center;
flex-direction: column;


}
`

const Text = styled.div`
font-size: 1.5rem;
margin-top: 20px;
color: #ffffff;
@media (max-width: 768px) {
font-size: 1rem;
margin-top: 20px;
color: #ffffff;


}

`

const Name = styled.div`
margin-top: 20px;
text-transform: uppercase;
font-size: 54px;
color: #ffffff;
@media (max-width: 768px) {

margin-top: 20px;
text-transform: capitalize;
font-size: 40px;
color: #ffffff;



}


`

const Software = styled.div`
color: #66B2B2;
font-size: 25px;
text-transform: capitalize;
margin-top: 20px;


`

const Intro = styled.p`
margin-top: 20px;
color: #ffffff;


`

const ButtonHolder = styled.div`
height: 50px;
width: 100px;
background-color: #66B2B2;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
@media (max-width: 768px) {
height: 50px;
width: 100px;
background-color: #66B2B2;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
 }

`
const ImageHolder = styled.div`
display: flex;
height: 500px;
width: 40%;

@media (max-width: 768px) {
    display: none;
 }
`

const Img = styled.img`
height: 500px;
width: auto;
object-fit: cover;
`
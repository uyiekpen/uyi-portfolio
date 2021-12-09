import React from 'react'
import styled from "styled-components"

const AboutComp = () => {
    return (
        <Container id="about">
            <AboutmeContainer>
                <TitleContent>
                    <Title>About Me -</Title>

                </TitleContent>
                <SecondContent>
                    <Box>
                        <ImageHolder>
                        <   Img src="./images/about.jpeg" alt="girl.jpg" />

                        </ImageHolder>
                        <AnotherTitle>
                            <WhoText>Who I am ----</WhoText>
                            <Title2>About Me</Title2>
                        </AnotherTitle>

                        <Context>
                        I’m Osazie Uyiekpen, a professional and talented frontend developer with great design skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. 
                        <p>I honed my skills at web app development, Teaching, and Project Management, 
                        I develop websites with HTML, CSS and JavaScript. I have top skills in building websites with  reactjs and also how to use other librairies such styled- component, material ui, antd , axios for intergration, firebase for storage , authetication.</p>
                        <p> Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.</p>
                        </Context>
                    </Box>

                </SecondContent>
            </AboutmeContainer>
        </Container>
    )
}

export default AboutComp

const Container = styled.div`
height: 600px;
color: white;
display: flex;
justify-content: center;
@media screen and (max-width:768px){
height: 900px;
width: 100vw;
display: flex;
justify-content: center;
}
`
const AboutmeContainer = styled.div`
height: 600px;
width: 90vw;
@media screen and (max-width:768px){
    height: 900px;
    width: 90vw;
}
`
const TitleContent = styled.div`
@media screen and (max-width:768px){
    display: none;
}
`

const Title = styled.div`
color: #66B2B2;
text-transform: uppercase;
font-weight: bold;
font-size: 40px;
`
const SecondContent = styled.div`
display: flex;
height: 700px;
width: 90vw;
justify-content: center;
margin-top: 20px;
@media screen and (max-width:768px){
display: flex;
height: 900px;
width: 90vw;
justify-content: center;
margin-top: 20px;
}
`

const Box = styled.div`
height: 700px;
width: 90vw;
display: flex;
justify-content: space-evenly;
@media screen and (max-width:768px){
    display: flex;
    height: 900px;
    width: 90vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;

}
`

const ImageHolder = styled.div`
height: 400px;
width: 400px;
border-radius: 40px;
background-color: #B4BECC;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transition: all 0.2s ease-in-out;
    
&:hover {
    transform: scale(1.02);
        transition: all 0.2s ease-in-out; 

  }

@media screen and (max-width:768px){
height: 300px;
width: 300px;
border-radius: 40px;
background-color: #B4BECC;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transition: all 0.2s ease-in-out;
}

`

const Img = styled.img`
height: 400px;
width: 400px;
object-fit: contain;

@media screen and (max-width:768px){
height: 300px;
width: 300px;
object-fit: contain;
}
`

const AnotherTitle = styled.div`
display: none;
@media screen and (max-width:768px){
    display: block;
    margin-top: 40px;
    line-height: 2.1;

}
`

const WhoText = styled.div`
font-weight: bold;
font-size: 17px;
color: #66B2B2;
`


const Title2 = styled.div`
font-weight: bolder;
`

const Context = styled.div`
height: 400px;
width: 500px;
color: white;
line-height: 1.5;
letter-spacing: 1.5px;
@media screen and (max-width:768px){
height: 500px;
width: 300px;
color: white;
font-size: 12px;
margin-bottom: 60px;
}

`
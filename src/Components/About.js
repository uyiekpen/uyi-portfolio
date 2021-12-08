import React from 'react'
import styled from "styled-components"
import Content from './Content'

const About = () => {
    return (
        <Container id="about">
            <AboutmeContainer>
                <TitleContent>
                    <Title>About Me -</Title>

                </TitleContent>
               <SecondContent>
                   <Box>
                        <ImageHolder>
                            
                            <Img src="./images/about.jpeg" alt="girl.jpg" />
                        </ImageHolder>
                        <AnotherText>
                            <WhoText>Who I am ----</WhoText>
                            <Title2>About Me</Title2>

                        </AnotherText>
                        <ContentHolder>
                        I’m Osazie Uyiekpen, a professional and talented frontend developer with great design skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. 
                        <p>I honed my skills at web app development, Teaching, and Project Management, 
                        I develop websites with HTML, CSS and JavaScript. I have top skills in building websites with  reactjs and also how to use other librairies such styled- component, material ui, antd , axios for intergration, firebase for storage , authetication.</p>
                        <p> Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.</p>


                        </ContentHolder>
                   </Box>
                </SecondContent>
            </AboutmeContainer>
        </Container>
    )
}

export default About

const Container = styled.div`
height: 600px;
width: 100vw;
display: flex;
justify-content: center;
overflow: hidden;
@media screen and (max-width:768px){
height: 900px;
width: 100vw;
display: flex;
justify-content: center;
overflow: hidden;
}



`
const AboutmeContainer = styled.div`
height: 700px;
@media screen and (max-width:768px){
height: 900px;

}

`

const Title = styled.div`
color: #66B2B2;
text-transform: uppercase;
font-weight: bold;
font-size: 40px;
@media screen and (max-width:768px){
color: #66B2B2;
text-transform: capitalize;
font-weight: bold;
font-size: 40px;
}

`

const TitleContent = styled.div`
@media screen and (max-width:768px){
display: none;
}

`

const SecondContent = styled.div`
color: white;
display: flex;
justify-content: center;
margin-top: 40px;
height: 900px;
width: 90vw;
@media screen and (max-width:768px){
color: white;
display: flex;
justify-content: center;
margin-top: 20px;
height: 900px;
width: 90vw;
}




`
const Box = styled.div`
height: 700px;
width: 70vw;
color: black;
display: flex;
justify-content: space-between;
@media screen and (max-width:768px){
height: 900px;
width: 70vw;
color: black;
display: flex;
justify-content: space-between;
flex-direction: column;
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
height: 400px;
width: 400px;
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
const AnotherText =styled.div`
display: none;
@media screen and (max-width:768px){
height: 900px;
display: block;
margin-top: 40px;
color: white;
line-height: 2.1;
}
`

const WhoText =styled.div`
font-weight: bold;
font-size: 17px;
color: #66B2B2;

`

const Title2 =styled.div`
font-size: 20px;
font-weight: bolder;
`



const ContentHolder = styled.div`
height: 400px;
width: 500px;
color: white;
line-height: 1.5;
letter-spacing: 1.5px;
@media screen and (max-width:768px){
height: 500px;
width: 400px;
color: white;
font-size: 12px;
margin-bottom: 60px;

}


`


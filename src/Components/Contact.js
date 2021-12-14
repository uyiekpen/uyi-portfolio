import React,{useState} from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import {AiOutlinePhone} from "react-icons/ai"

import styled from "styled-components"
import { app } from './base'

const Contact = () => {
    const [ name , SetName] = useState ("")
    const [email, SetEmail] = useState("")
    const [phoneNunber, SetPhoneNumber ] =useState("")
    const [message , SetMessage] = useState("")


    const sendMessage = async () => {
        await app.firestore().collection("Message").doc().set({
            name,
            email,
            phoneNunber,
            message
        })
    }
    

    return (
        <Container id="contact">
            <ContactContainer>
                <Text>
                    <Title>Contact Me -</Title>
                    <Next>Get in Touch</Next>
                    <Avialable>I am available to work on your projects and bring your ideas to life. I am just a click away.</Avialable>
                </Text>
                <Address>
                    <Location>
                        <Place>
                            <Icons><HiOutlineLocationMarker/></Icons>
                            <Text1>Ajegunle,Lagos</Text1>

                        </Place>
                        <Place>
                            <Icons><MdEmail/></Icons>
                            <Text1>uyiekpenelizabeth@gmail.com</Text1>
                        </Place>
                        <Place>
                            <Icons><AiOutlinePhone/></Icons>
                            <Text1>+234-704-232-4382</Text1>
                        </Place>
                    </Location>
                    <CardInfo>
                        <FullName>
                            <input
                            type="text"
                            placeholder="fullname"
                            value={name}
                            onChange={(e) =>{
                                SetName(e.target.value)
                            }}
                            />
                        </FullName>
                        <Home>
                            <input
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) =>{
                                SetEmail(e.target.value)
                            }}

                            />
                            <input
                            placeholder="PhoneNunber"
                            type="text"
                            value={phoneNunber}
                            onChange={(e) =>{
                                SetPhoneNumber(e.target.value)
                            }}
                            />

                        </Home>
                        <Message>
                            <input
                            placeholder="Send Message"
                            type="text"
                            value={message}
                            onChange={(e) =>{
                                SetMessage(e.target.value)
                            }}
                            />
                        </Message>
                        <ButtonHolder>
                            <button onClick={sendMessage}>Submit</button>
                        </ButtonHolder>

                
                    </CardInfo>
                </Address>
            </ContactContainer>
        </Container>
    )
}

export default Contact

const Container = styled.div`
height: 700px;
width: 100vw;
display: flex;
justify-content: center;
background-color: #262626;
@media screen and (max-width:768px){
height: 1000px;
width: 100vw;
display: flex;
justify-content: center;
background-color: #262626;
font-weight: bold;
}
`

const ContactContainer = styled.div`
height: 700px;
width: 90vw;
margin-top: 20px;
@media screen and (max-width:768px){
height: 1000px;
width: 90vw;
margin-top: 20px;
display: flex;
flex-direction: column;
}
`

const Text = styled.div`
height: 200px;
width: 90vw;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width:768px){
height: 200px;
width: 90vw;
display: flex;
flex-direction: column;
align-items: center; 
text-align:center;
}
`

const Title = styled.div`
font-size: 30px;
color:#66B2B2 ;
`

const Next = styled.div`
margin-top: 20px;
`

const Avialable = styled.div`
margin-top: 20px;

`

const Address = styled.div`
height: 500px;
width: 90vw;
display: flex;
justify-content: space-between;
@media screen and (max-width:768px){
height: 700px;
width: 90vw;
display: flex;
justify-content: space-between;  
flex-direction: column;
align-items: center;
}
`

const Location = styled.div`
height: 300px;
width: 40%;
@media screen and (max-width:768px){
    height: 200px;
    width: 300px;
}
`
const Place = styled.div`
display: flex;
margin-top: 20px;


`
const Text1 = styled.div`
height: 50px;
width: 300px;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width:768px){

}

`

const Icons = styled.div`
height: 50px;
width: 50px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color:#66B2B2 ;
@media screen and (max-width:768px){
height: 40px;
width: 40px;
border-radius: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color:#66B2B2 ; 
}

`


const CardInfo = styled.div`
height: 300px;
width: 60%;
display: flex;
flex-direction: column;
@media screen and (max-width:768px){
    height: 450px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

`

const FullName = styled.div`
input {
    height: 50px;
    width: 740px;
    background-color: #212121;
    border: 2px solid grey ;
    border-radius:20px;
    color: white;
    text-transform: capitalize;
    font-size: 20px;
}

@media screen and (max-width:768px){
    
    input {
    height: 50px;
    width: 300px;
    background-color: #212121;
    border: 2px solid grey ;
    border-radius:20px;
    color: white;
    text-transform: capitalize;
    font-size: 20px;

    }
}

`


const Home = styled.div`
display: flex;
justify-content: space-between;
input {
    height: 50px;
    width: 350px;
    margin-top: 30px;
    background-color: #212121;
    border: 2px solid grey ;
    border-radius:20px;
    color: white;
    text-transform: capitalize;
    font-size: 20px;
}
@media screen and (max-width:768px){
    height:300px ;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
    height: 50px;
    width: 300px;
    background-color: #212121;
    border: 2px solid grey ;
    border-radius:20px;
    color: white;
    text-transform: capitalize;
    font-size: 20px;

    }
}

`

const Message = styled.div`
input {
    height: 200px;
    width: 740px;
    margin-top: 30px;
    background-color: #212121;
    border: 2px solid grey ;
    border-radius:20px;
    color: white;
    text-transform: capitalize;
    font-size: 20px;
}
@media screen and (max-width:768px){
    input {
    height: 200px;
    width: 300px;
    background-color: #212121;
    border: 2px solid grey ;
    border-radius:20px;
    color: white;
    text-transform: capitalize;
    font-size: 20px;

    } 
}
`

const ButtonHolder = styled.div`
margin-top: 20px;

button {
height: 50px;
width: 150px;
background-color: #66B2B2;
border-radius: 20px;
border: none;
color: white;
font-size: 20px;
}

`
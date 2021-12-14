import React from 'react'
import styled from "styled-components"
import {GiCancel} from "react-icons/gi"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"





const SiderBar = ({ isOpen , onToggle}) => {

 
    return (
        <Container isOpen={isOpen} onClick={onToggle}>
        <SidebarHolder>
            <IconHolder>
                <GiCancel onClick={onToggle}/>
            </IconHolder>

        <SideBarContent >
            <ContentSign to="home" onClick={onToggle}>Home</ContentSign>
            <ContentSign to ="about" onClick={onToggle}>About</ContentSign>
            <ContentSign to = "services" onClick={onToggle}>Services</ContentSign>
            <ContentSign to ="contact"onClick={onToggle}>Contact me</ContentSign>
            
        </SideBarContent>
        
        </SidebarHolder>
        
    </Container>
    )
}

export default SiderBar

const Container = styled.div`
font-weight: bold;
position: fixed;
width: 100%;
height: 100%;
background-color: #212121;
z-index: 10;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
transition: 0.3s ease-in-out;



`

const SidebarHolder = styled.div`
width: 90vw;
height: 100%;
margin-top: 40px;



`
const IconHolder = styled.div`
display: flex;
width: 90vw;
justify-content: flex-end;
font-size: 30px;

`

const SideBarContent = styled.div`
text-transform: uppercase;
font-weight: bold;
font-size: 30px;
display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  /* align-items: center; */

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }

`



const ContentSign = styled(LinkS) `
margin-top: 10px;
margin-top: 0.5rem;

font-size: 20px;
font-weight: lighter;
`
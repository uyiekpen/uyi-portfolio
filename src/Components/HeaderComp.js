import React ,{useState} from 'react'
import styled from "styled-components"
import {BiHome} from "react-icons/bi"
import {MdOutlineContactSupport,
    MdOutlineDesignServices,
    MdOutlineApproval

} from "react-icons/md"
import {CgMenuRight} from "react-icons/cg"
import SiderBar from './SiderBar'
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"  


const HeaderComp = () => {
    const [isOpen , setIsOpen] = useState(false)

    const onToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Nav>
            <Container>
            <Logo />
            <Navmenu>
                <NavItem>
                    <BiHome/>
                    <NavLinks to="home" spy={true} smooth={true}>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <MdOutlineApproval/>
                    <NavLinks to="about" spy={true} smooth={true}>About</NavLinks>
                </NavItem>
                <NavItem spy={true} smooth={true}>
                    <MdOutlineDesignServices/>
                    <NavLinks to="services">Services</NavLinks>
                </NavItem>
                <NavItem>
                    <MdOutlineContactSupport/>
                    <NavLinks to="contact" spy={true} smooth={true}>Contact me</NavLinks>
                </NavItem>

            </Navmenu>
            <NavBar>
                <CgMenuRight onClick={() =>{ onToggle()}}/>
                {
                    isOpen ? <SiderBar onToggle ={onToggle}/> : null
                }
            </NavBar>
            </Container>
            
        </Nav>
    )
}

export default HeaderComp

const Nav = styled.div`
height: 70px;
width: 100vw;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
border: none;
position: sticky;
top: 0;
z-index: 10;
`

const Container = styled.div`
height: 70px;
width: 90vw;
display: flex;
align-items: center;
justify-content: space-between;
`

const Logo = styled.img`
height: 45px;
width: 100px;
object-fit: cover;
background-color: white;


`

const Navmenu = styled.div`
text-transform: uppercase;
width: 500px;
display: flex;
justify-content: space-evenly;
font-size: 20px;
font-weight: bold;


@media (max-width: 768px) {
    display: none;
 }
`

const NavItem = styled.div`
color:white;
display: flex;
text-decoration: none;
color: #ffffff;
font-size: 15px;
padding: 0 12px;
align-items: center;

`

const NavLinks = styled(LinkS)`
 font-size: 15px;
letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

     &:before {
    background-color: rgb(137, 192, 234);
    border-radius: 0px 0px 4px 4px;
    bottom: -6px;
    content: "";
    height: 2px;
    left: 0px;
    opacity: 0;
    position: absolute;
    right: 0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    visibility: hidden;
    width: auto;
    }

    &:hover {
    &:before {
    transform: scaleX(1);
    visibility: visible;
    opacity: 1 !important;
  }
}


`
const NavBar = styled.div`
display: none;
justify-content: center;
color: #5F9DCE;
font-weight: bold;
font-size: 30px;

 @media (max-width: 768px) {
    display: block;
 }

`


import React from 'react'
import AboutComp from "./AboutComp"
import Content from './Content'
import HeaderComp from './HeaderComp'
import Services from "../Components/Services"
import Footer from "../Components/Footer"
import Contact from './Contact'



const Home = () => {
    return (
        <div id ="home">
            <HeaderComp/>
            <Content/>
            <AboutComp/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home

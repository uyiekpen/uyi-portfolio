import React from 'react'
import About from './About'
import Content from './Content'
import HeaderComp from './HeaderComp'
import Services from "../Components/Services"
import Footer from "../Components/Footer"
// import Contact from './Contact'


const Home = () => {
    return (
        <div id ="home">
            <HeaderComp/>
            <Content/>
            <About/>
            {/* <Services/> */}
            {/* <Contact/> */}
            {/* <Footer/> */}
        </div>
    )
}

export default Home

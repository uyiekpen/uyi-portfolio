import React from 'react'
import Contact from './Contact'
import Content from './Content'
import Footer from './Footer'
import HeaderComp from './HeaderComp'
import Projects from './Projects'
import Skills from './Skills'




const Home = () => {
    return (
        <div id ="home">
            <HeaderComp/>
            <Content/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home

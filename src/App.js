import React from 'react'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Contact from './Components/Contact'
import Home from './Components/Home'
import "./App.css"

const App = () => {
  return (
      <Router>

       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route exact path="/contact">
           <Contact/>
         </Route>
       </Switch>
        

      </Router>

  
  )
}

export default App

import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import About from './Components/About'
import Error from './Components/Error'
import Navigation from './Components/Navigation'

function App() {
  return (
     <BrowserRouter>
     <Navigation />
     <Switch>
     <Route path='/' component={About} exact />
     <Route path='/meme' component={Header} />
     <Route component={Error} />
     </Switch>
     <Route path='/meme' component={MemeGenerator} />
     </BrowserRouter>
    
  )
}

export default App
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import About from './Components/About'

function App() {
  return (
     <BrowserRouter>
     <Route path='/' component={About} exact />
     <Route path='/meme' component={Header} />
     <Route path='/meme' component={MemeGenerator} />
     </BrowserRouter>
    
  )
}

export default App
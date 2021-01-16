import React from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Header />
      <br />
      <Container md={8} xl={16}>
        <MemeGenerator />
      </Container>
    </div>
  )
}

export default App

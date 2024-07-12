import { useState } from 'react'
import './App.css'
import Footer from './elements/Footer/Footer'
import Header from './elements/Header/Header'
import Body from './elements/Body'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header />
      <Body />
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

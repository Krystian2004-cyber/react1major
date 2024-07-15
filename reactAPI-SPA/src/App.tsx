import './App.css'
import Header from './elements/Header/Header'
import Body from './elements/Body'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Body />
      </BrowserRouter>
    </>
  )
}

export default App

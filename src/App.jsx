import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import Shop from './Components/Shop'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

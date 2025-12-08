import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Shop from './Components/Shop'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

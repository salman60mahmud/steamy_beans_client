import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Shop from './Components/Shop'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='*' element={<NotFound />} /> 
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App

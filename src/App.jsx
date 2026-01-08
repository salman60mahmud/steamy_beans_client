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
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import AuthProvider from '../AuthProvider'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dashboard' element={<AuthProvider > <Dashboard /></AuthProvider>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App

// CSS
import './App.css'

// ROUTER
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar/>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/About' element={<About/>}></Route>
                    <Route path='/Login' element={<Login/>}></Route>
                    <Route path='/Register' element={<Register/>}></Route>
                </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

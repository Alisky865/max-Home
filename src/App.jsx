
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header.jsx'
// import SideBar from './Components/SideBar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import About from './Pages/About.jsx'




function App() {
  
  return (
    <>
      <Header/>
      {/* <SideBar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <About/>
      <Footer/>
    </>
  )
}

export default App

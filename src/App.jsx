
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import AgentsOrTenants from './Pages/AgentsOrTenants.jsx'
import SignUp from './Pages/SignUp.jsx'
import About from './Pages/About.jsx'




function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/AgentsOrTenants" element={<AgentsOrTenants/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      {/* <AgentsOrTenants/> */}
      <About/>
      <Footer/>
    </>
  )
}

export default App

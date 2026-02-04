
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import AgentsOrTenants from './Pages/AgentsOrTenants.jsx'
import TenantSignUp from './Pages/TenantSignUp.jsx'
import AgentSignUp from './Pages/AgentSignUp.jsx'
import About from './Pages/About.jsx'




function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/agentsortenants" element={<AgentsOrTenants/>}/>
        <Route path="/tenantsignUp" element={<TenantSignUp/>}/>
        <Route path="/agentsignup" element={<AgentSignUp/>}/>
      </Routes>
      <About/>
      <Footer/>
    </>
  )
}

export default App

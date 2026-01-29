
import React from 'react';
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import About from './Pages/About.jsx'




function App() {
  
  return (
    <>
      <Header/>
      <Home/>
      <Login/>
      <SignUp/>
      <About/>
      <Footer/>
    </>
  )
}

export default App

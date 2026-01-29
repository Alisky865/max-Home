
import React from 'react';
import '../styles/styling.css'


function Header() {

   window.addEventListener("scroll",bgScroll,);

   function bgScroll()
   {let headerScroll = document.querySelector(".header-box");
   let navScroll = document.querySelectorAll(".navbar-icon");

    let scrollPosition = window.scrollY;

    if(scrollPosition > 150)
     {headerScroll.classList.add("scrolled");

     }

     else{headerScroll.classList.remove("scrolled");}
    

   navScroll.forEach((navs)=>{
     scrollPosition > 150 ? navs.classList.add("navScrolled") :
                          navs.classList.remove("navScrolled")
    });

  }

  return (
    <>

     <div className="header-box">
       <div className="logo-box">
         <img className="w-11" id="brand-pix" src="/src/assets/logo.webp" alt="LOGO"></img>
       </div>
       <nav className="navBar">
         <ul className="navBar-ul">
            <li>
              <a href="#hero-container" className="nav-bar-a">Home
                <i className="fa-solid fa-caret-down navbar-icon text-[#334EAC] ml-2" id="navbar-icon"></i>
              </a>
            </li>
            <li>
              <a href="#" className="nav-bar-a">Available Properties
                <i className="fa-solid fa-caret-down navbar-icon text-[#334EAC] ml-2" id="navbar-icon"></i>
              </a>
            </li>
            <li>
              <a href="#about-container" className="nav-bar-a">About
                <i className="fa-solid fa-caret-down navbar-icon text-[#334EAC] ml-2" id="navbar-icon"></i>
              </a>
            </li>
            <li>
              <a href="#" className="nav-bar-a">Contact
                <i className="fa-solid fa-caret-down navbar-icon text-[#334EAC] ml-2" id="navbar-icon"></i>
              </a>
            </li>
         </ul>
       </nav>

       <div className="login-box1 flex flex-row flex-1 align-middle justify-end p-3 m-[5px]">
         <button className="login-btn text-[#334EAC] font-sans text-[13px] font-bold py-[5px] px-[20px] mr-[15px] bg-[#D0E3FF] border-none rounded-[5px] cursor-pointer">LOG IN</button>

         <button className="signin-btn text-[#334EAC] font-sans text-[13px] font-bold py-[5px] px-[20px] mr-[15px] bg-[#D0E3FF] border-none rounded-[5px] cursor-pointer">SIGN IN</button>
       </div>
     </div>
      
    </>
  )
}

export default Header
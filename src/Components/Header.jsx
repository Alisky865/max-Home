
import React from 'react';
import '../styles/styling.css'
import '../styles/responsive.css'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';


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

   const clickSideBar = ()=>{
    const clickbtn = document.querySelector(".sideBarBtn");
    clickbtn.classList.toggle("sideBarToggling");

    const sideBar = document.querySelector(".sideBar");
    sideBar.classList.toggle("sideBarShow");

  }

  const closeSideBar = ()=>{
    const clickbtn = document.querySelector(".sideBarBtn");
    clickbtn.classList.toggle("sideBarToggling");

    const sideBar = document.querySelector(".sideBar");
    sideBar.classList.toggle("sideBarShow");

  }

  return (
    <>

     <div className="header-box">
       <div className="logo-box flex flex-[1] flex-row font-sans 
         text-[11px] font-bold text-[#D0E3FF] p-[3px] m-[5px] ">
         <img className="relative left-[50px] w-11 " id="brand-pix" src="/logo.webp" alt="LOGO"></img>
       </div>
       <nav className="navBar flex flex-[2] flex-row align-middle 
         justify-center p-[3px] m-[5px] relative ">
         <ul className="navBar-ul flex flex-[1] flex-row align-middle justify-between list-none p-[2px] m-[2px] h-max ">
            <li>
              <NavLink to="/" className={({isActive})=>  
               isActive ? "navBarLink-active" : "nav-bar-a"}end>Home
                {/* <i className="fa-solid fa-caret-down navbar-icon text-[#334EAC] ml-2" id="navbar-icon"></i> */}
              </NavLink>
            </li>
            <li>
              <a href="#" className="nav-bar-a">Available Properties
                {/* <i className="fa-solid fa-caret-down navbar-icon text-[#334EAC] ml-2" id="navbar-icon"></i> */}
              </a>
            </li>
            <li>
              <a href="#about-container" className="nav-bar-a">About
                {/* <i className="fa-solid fa-caret-down navbar-icon text-[#334EAC] ml-2" id="navbar-icon"></i> */}
              </a>
            </li>
            <li>
              <a href="#contact-details" className="nav-bar-a">Contact
                {/* <i className="fa-solid fa-caret-down navbar-icon text-[#334EAC] ml-2" id="navbar-icon"></i> */}
              </a>
            </li>
         </ul>
       </nav>

       <div className="login-box1 flex flex-row flex-1 align-middle justify-end p-3 m-[5px]">
         <Link to="/login">
           <button className="login-btn text-[#334EAC] font-sans 
           font-bold py-[5px] px-[20px] mr-[15px] bg-[#D0E3FF] border-none rounded-[5px] cursor-pointer">
           LOG IN
           </button>
         </Link>

         <Link to="/agentsortenants">
           <button className="signin-btn text-[#334EAC] font-sans text-[13px] font-bold py-[5px] px-[20px] mr-[15px] bg-[#D0E3FF] border-none rounded-[5px] cursor-pointer">
           SIGN UP
           </button>
         </Link>
       </div>

       <div className="sideBarBtnBox hidden  flex-row flex-1 align-middle 
         justify-end p-3 m-[5px]"> 

         <div className="sideBarBtn bg-[#D0E3FF] border-none 
           rounded-[2px] h-[3px] w-[30px] transition-[all_1s_ease] cursor-pointer relative my-[7px]" onClick={clickSideBar}>
         </div>
        
       </div>
     </div>



      <aside className="sideBar z-[15] hidden
        align-middle justify-start px-[15px] py-[3px] h-screen w-[max-content] fixed top-[0px] left-[-200px] bottom-[0px] m-[0px]
          bg-[#4E4C4C] " 
          onClick={closeSideBar}>
          <div className="logo-box flex flex-row font-sans 
            text-[11px] font-bold text-[#D0E3FF] p-[3px]  mb-[35px] ">
            <img className="relative left-[50px] w-11 " id="brand-pix" src="/logo.webp" alt="LOGO"></img>
          </div>

          <ul className="sideBar-ul flex flex-col align-middle
          justify-between text-[13px] text-[#D0E3FF] font-sans font-bold list-none px-[3px] py-[10px] m-[2px]">
              <li className="mb-[7px]">
                <NavLink to="/" className={({isActive})=>  
                isActive ? "text-[13px] text-[#334EAC] font-sans font-bold list-none px-[3px] py-[10px] ml-[-2px]" : "text-[13px] text-[#D0E3FF] font-sans font-bold list-none px-[3px] py-[10px] ml-[-2px]"} 
                end > Home
                  {/* <i className="fa-solid fa-caret-down sidebar-icon text-[#D0E3FF] mb-[3px]" id="sidebar-icon"></i> */}
                </NavLink>
              </li>
              <li className="mb-[7px]">
                <a href="#" className="side-bar-a mb-[7px]">Available Properties
                  {/* <i className="fa-solid fa-caret-down sidebar-icon text-[#D0E3FF] mb-[3px]]" id="sidebar-icon"></i> */}
                </a>
              </li>
              <li className="mb-[7px]">
                <a href="#about-container" className="side-bar-a mb-[7px]">About
                  {/* <i className="fa-solid fa-caret-down sidebar-icon text-[#D0E3FF] mb-[3px]" id="sidebar-icon"></i> */}
                </a>
              </li>
              <li className="mb-[7px]">
                <a href="#contact-details" className="side-bar-a">Contact
                  {/* <i className="fa-solid fa-caret-down sidebar-icon text-[#D0E3FF] mb-[3px]" id="sidebar-icon"></i> */}
                </a>
              </li>
          </ul>

          <div className="sidebar-login-box flex flex-row gap-[10px] place-items-end py-[3px] px-[0px] m-[5px] mb-[50px] h-[100vh] ">
           <Link to="/login"> 
             <button className="sidebarlogin-btn text-[#334EAC] font-sans 
             font-bold py-[5px] px-[13px] bg-[#D0E3FF] border-none rounded-[5px] cursor-pointer">
             LOG IN
             </button>
           </Link>

           <Link to="/agentsortenants">
             <button className="sidebarsignin-btn text-[#334EAC] font-sans text-[13px] font-bold py-[5px] px-[13px] bg-[#D0E3FF] border-none rounded-[5px] cursor-pointer">
             SIGN UP
             </button>
           </Link>
        </div>
      </aside>


      
    </>
  )
}

export default Header
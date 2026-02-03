
import React from 'react';
import '../styles/styling.css'
import '../styles/responsive.css'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';


function SideBar() {

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

  return (
    <>

     <div>

      <nav className="sideBar z-[15] 
        align-middle justify-start px-[15px] py-[3px] h-screen w-[max-content] fixed top-[0px] left-[-200px] bottom-[0px] m-[0px]
          bg-[#4E4C4C] ">
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

          <div className="sidebar-login-box flex flex-row gap-[10px] align-middle justify-between py-[3px] px-[0px] m-[5px] h-auto">
          <button className="sidebarlogin-btn text-[#334EAC] font-sans 
          font-bold py-[5px] px-[10px] bg-[#D0E3FF] border-none rounded-[5px] cursor-pointer">
            <Link to="/login"> LOG IN</Link>
          </button>

          <button className="sidebarsignin-btn text-[#334EAC] font-sans text-[13px] font-bold py-[5px] px-[10px] bg-[#D0E3FF] border-none rounded-[5px] cursor-pointer">
            <Link to="/signup">SIGN IN</Link>
          </button>
        </div>
      </nav>

     </div>
      
    </>
  )
}

export default SideBar
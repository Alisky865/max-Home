
import React from 'react';
import '../styles/styling.css'
import '../styles/responsive.css'


function About() {
 
 
  return (
    <>

     <section className="about-container z-[7] grid grid-cols-[1fr_1fr_1fr_1fr] bg-[#D0E3FF] gap-[15px] m-0 px-[75px] py-[20px]" id="about-container">

       <div className="about-Box1 flex flex-col flex-1 align-middle 
         justify-between p-[5px] break-words overflow-hidden">
           <h1 className="about-Box1-heading  text-[black] capitalize 
             font-sans font-bold text-[17px] my-[5px] ">
             My Account
           </h1>

           <p className="  text-black capitalize font-sans font-normal 
             text-[11px] text-justify m-[0px] ">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia fugit, voluptas eaque minima sit veritatis et iusto ducimus voluptatem quasi ad ut provident odit, maiores id adipisci vero. Eos?
           </p>

           <div className="flex flex-row align-middle justify-center; 
             m-[5px] p-0 relative left-[-5px]">
             <input type="email" name="" id="" className="email-Subscribe
               text-black font-sans font-bold text-[11px] bg-[#D0E3FF] px-10px py-5px border-[2px] border-[#334EAC] rounded-[5px] rounded-r-[0px] rounded-l-[5px] w-[100%]" placeholder="Enter Email"
             />
             <button className="subscribeBtn text-[#D0E3FF] font-sans
               text-[11px] font-bold px-[10px] py-[10px] bg-[#334EAC] border-none rounded-r-[5px] rounded-l-[0px] cursor-pointer">
               Subscribe
             </button>
          </div>
       </div>

     {/*********************************************/}


       <div className="about-Box2 flex flex-col p-[5px] justify-self-end">
         <h1 className="about-Box2-heading  text-[black] capitalize 
           font-sans font-bold text-[17px] my-[5px] ">
             Contact
         </h1>
         
         <p className="aboutBox2Address  text-black capitalize font-sans 
           font-normal text-[11px] text-justify m-[0px] text-wrap ">
             <i className="fa-solid fa-map-marker text-[#334EAC] mr-2" 
               id="caret-icon">
             </i>
             9 MaxHome Street, Lagos, Nigeria.
         </p>

         <a href="08071317063" className="aboutBox2Number  text-black 
             capitalize font-sans font-normal text-[11px] text-justify 
             my-[5px] text-wrap ">
             <i className="fa-solid fa-phone text-[#334EAC] mr-2" 
               id="caret-icon">
             </i>
             08071317063
         </a>

         <a href="contact@max-Home.com" className="aboutBox2Email 
           text-black capitalize 
           font-sans font-normal text-[11px] text-justify m-[0px]">
           <i className="fa-solid fa-envelope text-[#334EAC] mr-2" 
             id="caret-icon">
           </i>
           contact@max-Home.com
         </a>

         <a href="www.maxHome.com" className="aboutBox2Website 
           text-black  
           font-sans font-normal text-[11px] my-[5px]">
           <i className="fa-solid fa-globe text-[#334EAC] mr-2" 
             id="caret-icon">
           </i>
           www.maxHome.com
         </a>

         <div className="aboutBox2Social flex flex-row align-middle 
           p-[0px] my-[5px] ">
           <a href="#">
             <i className="fab fa-facebook  text-[#334EAC] mr-3" 
               id="social-media-icons">
             </i>
           </a>

           <a href="#">
             <i className="fab fa-instagram  text-[#334EAC] mr-3" 
               id="social-media-icons">
             </i>
           </a>

           <a href="#">
             <i className="fab fa-twitter text-[#334EAC] mr-3" 
               id="social-media-icons">
             </i>
           </a>

           <a href="#">
             <i className="fab fa-linkedin  text-[#334EAC] mr-3" 
               id="social-media-icons">
             </i>
           </a>
         </div>
       </div>

     {/*****************************************/}


       <div className="about-Box3 flex flex-col p-[5px] justify-self-end ">
         <h1 className="about-Box3-heading  text-[black] capitalize 
           font-sans font-bold text-[17px] my-[5px] ">
             Information
         </h1>

         <a href="#" className="aboutBox3link1  text-black 
           capitalize font-sans font-normal text-[11px] text-justify 
           my-[5px]">
           Latest listings
         </a>

         <a href="#" className="aboutBox3link2 
           text-black capitalize 
           font-sans font-normal text-[11px] text-justify m-[0px]">
           Top Sellers
         </a>

         <a href="#" className="aboutBox3link3 
           text-black  
           font-sans font-normal text-[11px] my-[5px]">
           Verified Listings
         </a>

         <a href="#" className="aboutBox3link4 
           text-black  
           font-sans font-normal text-[11px] my-[5px]">
           Our Blog
         </a>

       </div>

    {/*****************************************/}


       <div className="about-Box4 flex flex-col p-[5px] 
         justify-self-end ">
         <h1 className="about-Box4-heading  text-[black] capitalize 
           font-sans font-bold text-[17px] my-[5px] ">
             Information
         </h1>

         <a href="#" className="aboutBox4link1  text-black 
           capitalize font-sans font-normal text-[11px] text-justify 
           my-[5px]">
           Latest listings
         </a>

         <a href="#" className="aboutBox4link2 
           text-black capitalize 
           font-sans font-normal text-[11px] text-justify m-[0px]">
           Top Sellers
         </a>

         <a href="#" className="aboutBox4link3 
           text-black  
           font-sans font-normal text-[11px] my-[5px]">
           Verified Listings
         </a>

         <a href="#" className="aboutBox4link4 
           text-black  
           font-sans font-normal text-[11px] my-[5px]">
           Our Blog
         </a>

       </div> 

     </section>
    
      
      
    </>
  )
}

export default About
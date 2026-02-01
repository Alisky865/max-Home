
import React from 'react';
import '../styles/styling.css'
import '../styles/responsive.css'


function Home() {
 
 
  return (
    <>

     <section className="hero-container z-[2] flex flex-col justify-end 
     flex-wrap relative top-[0px] left-[0px] right-[0px] 
     px-[50px] py-[30px] h-screen
      " id="hero-container">
       <div className="hero-container-box1 flex flex-col jsutify-between break-words p-[10px] h-max w-[500px] relative top-[50px] bg-transparent">
         <p className="para1 text-[#D0E3FF] font-sans font-bold 
           text-[40px] mt-4 mb-4 mr-0 ml-0">
           Lost <span className="text-[#334EAC]">Between</span> Finding 
           A Home <span className=" text-[#334EAC]">And</span> finding
           An Agents ?
         </p>

         <p className="para2 text-[#D0E3FF] capitalize font-sans font-medium text-[17px] mt-4 mb-4 mr-0 ml-0 text-justify ">
           the journey to finding a perfect home shouldn't feel like a guesswork, as we connect you with verified agents and real properties  you can trust.
         </p>

        

         <div className="get-started-box flex flex-row justify-between py-[10px] px-[2px] ">
           <a href="#" className="link1 text-[#D0E3FF] font-sans text-[17px] font-bold px-[40px] py-[5px] mr-[5px] bg-[#334EAC] border-none rounded-[11px] cursor-pointer relative " id="get-started-btn">GET STARTED</a>

           <a href="#" className="text-[#334EAC] font-sans text-[17px] font-bold px-[40px] py-[5px] bg-[#D0E3FF] border-none rounded-[11px] cursor-pointer relative" id="learn-more-btn">LEARN MORE</a>
         </div>
       </div> 

       <div className="hero-container-box2
          flex flex-row justify-center self-center p-2.5 mt-28 bg-transparent relative top-[20px] h-max">
         <button className="bg-[#D0E3FF] p-[4px] border-none mt-0 mb-0 mr-2.5 ml-2.5 rounded-[100%] cursor-pointer "></button>
         <button className="bg-[#D0E3FF] p-[4px] border-none mt-0 mb-0 mr-2.5 ml-2.5 rounded-[100%] cursor-pointer "></button>
         <button className="bg-[#D0E3FF] p-[4px] border-none mt-0 mb-0 mr-2.5 ml-2.5 rounded-[100%] cursor-pointer "></button>
         <button className="bg-[#D0E3FF] p-[4px] border-none mt-0 mb-0 mr-2.5 ml-2.5 rounded-[100%] cursor-pointer "></button>
       </div>
       
     </section>
    
      
      
    </>
  )
}

export default Home
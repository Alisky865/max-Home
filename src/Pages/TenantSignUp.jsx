
import React from 'react';
import '../styles/styling.css'
import '../styles/responsive.css'


function TenantSignUp() {

 
  return (
    <>

     <section className="signInContainer z-[9] flex flex-col  
       align-middle justify-center relative top-0 left-0 right-0 
       p-[35px] h-max"  id="login-container">

       <div className="signinBox self-center flex flex-col align-middle 
         px-[5px] py-[1px] border-[2px] border-[solid] 
         border-[#D0E3FF] bg-[#D0E3FF10] backdrop-blur-[4px] 
         rounded-[11px] h-[max-content] w-[max-content] mt-[70px]">
           <div>
             <h1 className="sign-up-heading text-center text-[25px] 
               font-sans font-bold text-[#D0E3FF] my-[10px]">Sign up
             </h1>
           </div>


           <div className="details-box grid grid-cols-2 
             gap-[0px] p-[5px] w-[100%]">   

             <div className="fname-grid grid grid-rows-1 
              p-[5px] mb-[15px] w-[170px] overflow-hidden ">
                <input className="firstNameInput  text-black font-sans font-normal text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] border-[2px] border-none rounded-[5px] h-max w-[150px]" type="text" name="FirstName" placeholder="First Name" required/>

             </div>
             <div className="grid grid-rows-1  
              p-[5px] mb-[15px] w-[170px] overflow-hidden ">
                <input className="lastNameInput  text-black font-sans font-normal text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] border-[2px] border-none rounded-[5px] h-max w-[150px]" type="text" name="LastName" placeholder="Last Name" required/>
                
             </div>


             <div className="grid grid-rows-1 
              p-[5px] mb-[15px] w-[170px] overflow-hidden ">
                <input className="emailInput  text-black font-sans font-normal text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] border-[2px] border-none rounded-[5px] h-max w-[150px]" type="email" name="Email" placeholder="Email" required/>
                
             </div>
             <div className="grid grid-rows-1 
              p-[5px] mb-[15px] w-[170px] overflow-hidden ">
                <input className="phoneNumberInput  text-black font-sans font-normal text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] border-[2px] border-none rounded-[5px] h-max w-[150px]" type="number" name="PhoneNumber" placeholder="Phone Number" required/>
                
             </div>


             <div className=" grid grid-rows-1
               p-[5px] w-[170px] overflow-hidden">
                <input className="passwordInput  text-black font-sans font-normal text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] border-[2px] border-none rounded-[5px] h-max w-[150px]" type="password" name="Password" placeholder="Password" required minLength="7"/>
                <p className="text-[7px] text-[#D0E3FF] font-sans 
                 font-normal relative left-[3px] mt-[1px]">Password Must Not Be Less Than 7 Characters</p>
                
             </div>
             <div className="grid grid-rows-1
               p-[5px] w-[170px] overflow-hidden">
                <input className="passwordAgainInput  text-black font-sans font-normal text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] border-[2px] border-none rounded-[5px] h-max  w-[150px]" type="password" name="PasswordAgain" placeholder="Re-enter Password" required minLength="7"/>
                
             </div>
           </div>


         <div className="grid grid-rows-1
            gap-[10px] px-[10px] py-[5px] mt-[5px] mb-[15px]">
             <div className="">
                <p className="agree-terms text-[12px] font-sans 
                  font-normal text-[#D0E3FF] mb-[3px] capitalize">
                  by clicking sign up, you agree to our
                  <a href="#" className="text-[#334EAC]"> terms </a> 
                    and that<br/>you have read our 
                  <a href="#" className="text-[#334EAC]"> data use policy 
                  </a> including our<br/>
                  <a href="#" className="text-[#334EAC]"> cookie use.</a>
                </p>
             </div>

             <button className=" bg-[#334EAC] text-[13px] 
               text-[#D0E3FF] font-sans font-normal px-[10px] py-[5px] 
               border-none 
               rounded-[7px] cursor-pointer w-[100%]">
               Sign Up
             </button>
         </div>
       </div>
     </section>
    
      
      
    </>
  )
}

export default TenantSignUp
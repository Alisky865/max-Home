
import React from 'react';
import { useState } from 'react'
import NaijaStates from 'naija-state-local-government'
import '../styles/styling.css'
import '../styles/responsive.css'


function AgentSignUp() {

  const [stateDetails, setStateDetails] = useState({
    countryOfOrigin: "NG",
    stateOfOrigin: "",
    localGovernment: "",
  });

  const states = NaijaStates.states();
  const lgas = stateDetails.stateOfOrigin ? 
                NaijaStates.lgas(stateDetails.stateOfOrigin).lgas : [];
  
  const pickState = (e)=> {
    const {name, value} = e.target;
    setStateDetails((prev)=>({...prev, [name]: value, ...(name === "stateOfOrigin" && {localGovernment: "",}),
      }
     )
    );
   };


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

             <div className="details-box3a grid grid-rows-2
                p-[5px] relative left-[3px] h-max ">
                <p className="text-[11px] text-[#D0E3FF] font-sans   
                  font-normal mb-[0px] mt-[1px]">
                  Gender
                </p>
                <div className="flex flex-row align-middle
                  justify-start py-[5px] px-[2px] relative left-[-3px]
                  mt-[-7px]">
                  <input className="maleGender  bg-[#D0E3FF]" type="radio" name="genderChoice" value="male"/>
                  <label htmlFor="maleGender" className="malelabel
                    text-[#D0E3FF] text-[13px] font-sans font-normal ml-[3px]">
                    Male
                  </label>

                  <input className="femaleGender bg-[#D0E3FF] ml-[7px]" type="radio" name="genderChoice" value="female"/>
                  <label htmlFor="femaleGender" className="femalelabel
                    text-[#D0E3FF] text-[13px] font-sans font-normal ml-[3px]">
                    Female
                  </label>
                </div>
                
             </div>

             <div className="details-box2 grid grid-rows-1 w-[160px]  
                 py-[3px] px-[4px] relative left-[0px] place-content-start">
                <label htmlFor="Birthdate" className="datelabel text-[#D0E3FF] 
                font-sans font-normal text-[11px] relative left-[1px]">
                  Date Of Birth
                </label>
                <input className="dateInput dater  text-black font-sans font-normal text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] my-[3px] rounded-[5px] h-max w-[150px]" type="date" name="date" placeholder="Date Of Birth" required/>
                 {/* <p>Enter this field</p> */}
                   
             </div>

             <div className="stateBox grid grid-rows w-[100%] overflow-hidden 
                py-[3px] px-[4px] place-content-start">
                <label htmlFor="State" className="stateLabel text-[#D0E3FF]  
                font-sans font-normal text-[11px] relative left-[1px]">
                State of Origin
                </label>
                <select className=" stateInput 
                text-[#334EAC] font-sans font-normal text-[11px] 
                  bg-[#D0E3FF] px-[7px] py-[7px] my-[3px] 
                  border-[2px] border-none rounded-[5px] h-max 
                  w-[150px]" name="stateOfOrigin" 
                  value={stateDetails.stateOfOrigin}
                  onChange={pickState} required>
                    <option value="">Select State</option>
                    {states.map((state)=>(<option 
                      key={state} value={state}> {state} </option>
                      ))
                    }
                </select>
                
                
             </div>

             <div className="stateBox grid grid-rows-1 w-[100%] overflow-hidden 
                py-[3px] px-[4px] place-content-start">
                <label htmlFor="State" className="stateLabel text-[#D0E3FF]  
                font-sans font-normal text-[11px] relative left-[1px]">
                L.G.A
                </label>
               <select className=" stateInput 
                  text-[#334EAC] font-sans font-normal text-[11px] 
                  bg-[#D0E3FF] px-[7px] py-[7px] my-[3px] 
                  border-[2px] border-none rounded-[5px] h-max 
                  w-[150px]" name="localGovernment" 
                  value={stateDetails.localGovernment}
                  onChange={pickState}
                  disabled={!stateDetails.stateOfOrigin} required>
                  <option value="">LGA</option>
                    {lgas.map((lgA)=>(<option 
                    key={lgA} value={lgA}> {lgA} </option>
                    ))
                  }
               </select>
                 {/* <p>this field cant be empty</p>  */}

             </div>

             <div className="details-box3b grid grid-rows-1 
                place-content-start
                py-[3px] px-[3px] h-max mt-[5px] ">
                <p className="docTypeLabel text-[11px] text-[#D0E3FF] font-sans   
                  font-normal mb-[0px] relative left-[2px]  ">
                  Type Of Identity Document
                </p>
                <div className="flex flex-row">
                  <select name="idProof" className="idSelector 
                    text-[#334EAC] text-[11px] font-sans font-bold 
                    bg-[#D0E3FF] border-none rounded-[5px] p-[5px] 
                    h-[28px] w-[149px]
                    cursor-pointer">
                    <option value="0" disabled>Proof Of 
                      Identity
                    </option>
                    <option value="Passport">Passport</option>
                    <option value="Driving License">
                      Driving License
                    </option>
                    <option value="National ID">
                      National ID
                    </option>

                  </select>
                </div>
                {/* <p>this field cant be empty</p>  */}
                  
             </div> 

             <div className="details-box4 grid grid-rows-1 place-content-start
                px-[3px] py-[3px] h-max mt-[5px] ">
                <p className="docUploadLabel text-[11px] text-[#D0E3FF] font-sans   
                  font-normal mb-[0px] relative left-[2px]">
                  Upload Proof Of Identity
                </p>
                <div className="flex flex-row
                  ">
                  <input className="fileUpload py-[5px] px-[3px] 
                    w-[151px] h-[max-content] text-[#334EAC] 
                    text-[9px] font-sans font-bold 
                    bg-[#D0E3FF] border-none rounded-[5px]" type="file" accept=".jpg, .png, .pdf "/>
               </div>
               {/* <p>this field cant be empty</p>  */}

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

export default AgentSignUp
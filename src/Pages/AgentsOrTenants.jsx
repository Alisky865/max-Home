
import React from 'react';
import  { useState, useEffect } from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom";
import '../styles/styling.css'
import '../styles/responsive.css'


function AgentsOrTenants() {
  const [choice, setChoice] = useState('')

  const navigate = useNavigate();

  function pickSignUpChoice(e){
    setChoice(e.target.value);
  }

  // function pickSignUpBoxTenant(){
  //   console.log('hello Tenant')
  //   setChoice('Tenant');
  //   // console.log(choice)
  // }

  // function pickSignUpBoxAgent(){
  //   console.log('hello Agent')
  //   setChoice('Agent');
  //   // console.log(choice)
  // }

  function pickSignUpBox(yourChoice){
    setChoice(yourChoice);
    // console.log(choice)
  }


  const isdisabled = choice.trim() === '';

  const createAcct = ()=>{
    if(choice === 'Tenant')
      navigate('/tenantsignup');
   else if(choice === 'Agent')
      navigate('/agentsignup');
    
    
  }

  // useEffect(()=>{console.log(choice)},[choice])
 
 
  return (
    <>

     <section className=" agentTenantContainer z-[9] flex flex-col align-middle  
       justify-center relative top-0 left-0 right-0 px-[35px] py-[35px] h-screen"  id="login-container">

        <div className="lonBox agentTenant self-center flex flex-col align-middle gap-[10px]
         px-[10px] py-[1px] border-[2px] border-[solid] 
         border-[#D0E3FF] bg-[#D0E3FF10] backdrop-blur-[4px] 
         rounded-[10px] h-[max-content] break-words w-[max-content]">
          
           <h1 className="signUp-heading text-center text-[17px] 
             font-sans font-bold text-[#D0E3FF] my-[15px] w-[220px] 
              relative left-[9px]">Sign Up As A Tenant Or An Agent
           </h1>         

           <div className="tenantBox grid grid-cols place-content-start
             p-[10px] mb-[20px] border-[2px] border-[solid] 
              border-[#D0E3FF] rounded-[7px] break-words w-[max-content] cursor-pointer bg-[#D0E3FF]"
              onClick={()=>{pickSignUpBox('Tenant')}}>

             <div className="flex flex-row place-content-between 
                py-[5px] mb-[10px] w-[220px]">
               <i className="text-[19px] text-[#334EAC] fa fa-user-circle"></i>
               <input className="cursor-pointer scale-150
                bg-[#334EAC]" id="check-box-input" type="radio" value="Tenant" name="AgentTenant"
                checked={choice === 'Tenant'}
                onChange={pickSignUpChoice}/>
             </div>
             <p className="text-[15px] text-[#334EAC] font-sans font-normal mt-[7px] w-[220px] ">
               I'm Looking For A property To <span className="text-[19px] font-bold ">Rent/Buy</span>
             </p>

           </div>

           <div className="agentBox tenantBox grid grid-cols place-content-start
             p-[10px] mb-[10px] border-[2px] border-[solid] 
              border-[#D0E3FF] rounded-[7px] break-words w-[max-content] cursor-pointer bg-[#D0E3FF]" 
              onClick={()=>{pickSignUpBox('Agent')}}>

             <div className="flex flex-row place-content-between 
                py-[5px] mb-[10px] w-[220px]">
               <i className="text-[19px] text-[#334EAC] fa fa-house-user"></i>
               <input className="cursor-pointer scale-150
                bg-[#334EAC]" id="check-box-input" type="radio" value="Agent" name="AgentTenant"
                checked={choice === 'Agent'}
                onChange={pickSignUpChoice}/>
             </div>
             <p className="text-[15px] text-[#334EAC] font-sans font-normal mt-[7px]  w-[220px]">
               I'm A Verified <span className="text-[19px] font-bold ">Agent</span> With Properties For Sale
             </p>

           </div>

           <div className="createBtn-box flex flex-row 
             place-content-center py-[5px] mb-[10px] w-[max-content]">
             <button className="createAcctBtn bg-[#334EAC] text-[13px] 
              text-[#D0E3FF] font-sans font-normal px-[15px] py-[5px] 
              border-none rounded-[5px] cursor-pointer w-[240px] transition-[all_1s_ease]   disabled:bg-[#9CA3AF] disabled:cursor-none disabled:opacity-[0.6] 
              disabled:transition-[all_1s_ease]" 
              disabled={isdisabled} onClick={createAcct}>
               Create Account
             </button>
           </div>

           <p className="text-center text-[13px] text-[#D0E3FF]  
             font-sans font-normal mb-[10px]">
             Already Have An Account ?  
             <Link to="/login" className="text-[#D0E3FF] 
              ml-[3px]">
                Log In
             </Link>
           </p>


        </div>     
        
      </section>
    
      
      
    </>
  )
}

export default AgentsOrTenants
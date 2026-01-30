
import React from 'react';
import '../styles/styling.css'
import '../styles/responsive.css'


function Login() {


  // <input type="radio" value='Home Delivery' 
  //             checked={deliveryMethod === 'Home Delivery'} 
  //             onChange={pickDeliveryMethod} />
  //           <label htmlFor="">Home Delivery</label>
 
 
  return (
    <>

     <section className="loginContainer z-[9] flex flex-col align-middle  
       justify-center relative top-0 left-0 right-0 p-[35px]"  id="login-container">

        <div className="loginBox self-center flex flex-col align-middle 
         px-[10px] py-[1px] border-[2px] border-[solid] 
         border-[#D0E3FF] bg-[#D0E3FF10] backdrop-blur-[4px] 
         rounded-[10px] h-[400px] w-[max-content] my-[30px]">

           <h1 className="log-in-heading text-center text-[25px] 
             font-sans font-bold text-[#D0E3FF] my-[15px]">Log In
           </h1>           

           <div className="flex flex-row align-middle justify-center 
             p-[5px] mb-[15px] relative right-[-10px] " id="logInform">
              <input className="email-input  text-black font-sans font-bold text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] border-[2px] border-none rounded-[5px] w-[250px]" type="text" name="Email " placeholder="Email" required/>

              <button className="text-gray-500 px-[3px] relative right-[25px] bg-transparent "> 
                 <i className="fa fa-envelope"></i>
              </button>
           </div>
           
           {/* <div className=" p-[3px] mt-[-19px] mb-[0px] 
             relative left-[15px]">
               <p className="errorMessage errorMessage9 
                text-[#D0E3ff] text-[9px] font-sans font-normal">
                 Enter Your Email
               </p>
               <p class="errorMessage errorMessage9a 
                text-[#D0E3ff] text-[9px] font-sans font-normal">Wrong Email Address</p>
           </div> */}

           <div className="flex flex-row align-middle justify-center 
             p-[5px] m-[2px] mb-[15px] relative right-[-10px]">
              <input className="password-input   text-black font-sans font-bold text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] border-[2px] border-none rounded-[5px] w-[250px]" type="password" name="Password" placeholder="Password" required minLength="7"/>

             <button className=" text-gray-500 px-[3px] relative 
               right-[25px] bg-transparent ">
                <i className="fa fa-lock"></i>
             </button>
             <button className="hidden text-gray-500 px-[3px] relative 
               right-[25px] bg-transparent ">
                <i className="fa fa-unlock"></i>
             </button>
           </div>

           {/* <div className=" p-[3px] mt-[-19px] mb-[0px] 
             relative left-[15px]">
               <p className="errorMessage errorMessage10
                 text-[#D0E3ff] text-[9px] font-sans font-normal">
                 Enter Your Password
               </p>
               <p className="errorMessage errorMessage10a 
                 text-[#D0E3ff] text-[9px] font-sans font-normal">
                 Wrong password
               </p>
           </div> */}

           

         <div className="agree-box flex flex-row align-middle 
           justify-between p-[2px] mb-[10px] relative right-[-16px] 
           w-[250px]">
           <div className="flex flex-row align-middle 
             justify-between p-[2px]" id="check-box">
             <input className="cursor-pointer" id="check-box-input" type="checkbox" value="Agree" name="Agree"/>
             <label htmlFor="Agree" className="ml-[3px] text-[#D0E3FF] font-sans font-normal text-[11px] ">Keep Me Logged in</label>
           </div>

           <div className="flex flex-row align-middle 
             justify-between p-[2px] " id="forget-password-box">
              <a href="#" className="text-black text-[11px] font-sans font-bold 
               decoration-0">Forget Password ?</a>
           </div>
         </div>

          <div className="log-in-button-box flex flex-row 
           justify-center p-[5px] mt-[5px] self-center 
           w-[257px]">
            <button className="bg-[#334EAC] text-[13px] text-[#D0E3FF] font-sans font-normal px-[15px] py-[5px] border-none rounded-[5px] cursor-pointer w-[100%] " type="submit">Log in</button>
          </div>

          <p className="relative left-[24px] mt-[10px] text-[#D0E3FF] font-sans font-normal">
            Dont Have An Account ? 
            <a href="#" className="text-black font-sans font-bold 
               decoration-0 ml-[7px]">Sign Up</a>
          </p>


        </div>     
        
      </section>
    
      
      
    </>
  )
}

export default Login

import React from 'react';
import '../styles/styling.css'
import '../styles/responsive.css'


function SignUp() {

  const clickHere = ()=>{
    const click = document.querySelector(".clickHereBtn");
    
    if(!click.classList.contains('clickToSignUp'))
      { click.classList.add('clickToSignUp'); 
         click.classList.remove('clickToSignUpClose')
      }
   else{click.classList.add('clickToSignUpClose');
     click.classList.remove('clickToSignUp');
   };


    // click.classList.contains('clickToSignUp') ? click.classList.add('clickToSignUpClose') : click.classList.add('clickToSignUp');
  }


  // <input type="radio" value='Home Delivery' 
  //             checked={deliveryMethod === 'Home Delivery'} 
  //             onChange={pickDeliveryMethod} />
  //           <label htmlFor="">Home Delivery</label>
 
 
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


           <div>
             <p className="sign-up-heading-p text-center text-[13px] 
              font-sans font-normal text-[#D0E3FF] mb-[5px] mr-[3px] 
               w-[100%]">
               Want To Register As An Agent ?
               <button className=" font-bold border-none bg-transparent px-[7px] py-[5px]" onClick={clickHere}>
                 Click Here
               </button>
             </p>
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


           <div className="clickHereBtn hidden ">
             <div className="details-box2 grid grid-cols-2">
                 <div className="grid grid-rows w-[160px]  
                   overflow-hidden py-[3px] px-[1px] relative left-[7px] place-content-center">
                   <label htmlFor="Birthdate" className="datelabel text-[#D0E3FF] 
                    font-sans font-normal text-[11px] relative left-[1px]">
                      Date Of Birth
                   </label>
                   <input className="dateInput dateInput2 text-black font-sans font-normal text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] my-[3px] border-[2px] border-none 
                   rounded-[5px] h-max w-[150px]" type="date" name="date" placeholder="Date Of Birth"/>
                   {/* <p>Enter this field</p> */}
                   
                 </div>
                 <div className="grid grid-rows w-[100%] overflow-hidden 
                   py-[3px] px-[1px] relative right-[7px] place-content-center">
                   <label htmlFor="State" className="stateLabel text-[#D0E3FF]  
                   font-sans font-normal text-[11px] relative left-[1px]">
                    State of Origin
                   </label>
                   <input className="dateInput stateInput text-black font-sans font-normal text-[11px] bg-[#D0E3FF] px-[7px] py-[7px] my-[3px] border-[2px] border-none rounded-[5px] 
                   h-max w-[150px]" type="date" name="date" placeholder="Date Of Birth"/>
                   
                </div>
                  
             </div>


             <div className="details-box3 grid grid-cols-2 
               align-middle gap-[5px] place-content-center p-[5px] 
                mt-[-5px] h-max ">
                <div className="details-box3a grid grid-rows-2
                   p-[5px] relative left-[3px] h-max ">
                   <p className="text-[11px] text-[#D0E3FF] font-sans   
                     font-normal mb-[0px] mt-[1px]">
                      Gender
                   </p>
                   <div className="flex flex-row align-middle
                     justify-start py-[5px] px-[2px] relative left-[-3px]
                     mt-[-7px]">
                     <input className="maleGender font-sans font-bold text-[11px] bg-[#D0E3FF]" type="radio" name="genderChoice" value="male"/>
                     <label htmlFor="maleGender" className="
                       text-[#D0E3FF] text-[13px] font-sans font-normal ml-[3px]">
                       Male
                     </label>

                     <input className="femaleGender font-sans font-bold text-[11px] bg-[#D0E3FF] ml-[7px]" type="radio" name="genderChoice" value="female"/>
                     <label htmlFor="maleGender" className="
                       text-[#D0E3FF] text-[13px] font-sans font-normal ml-[3px]">
                       Female
                     </label>
                  </div>
                </div>

                <div className="details-box3b grid grid-rows-2 place-content-center
                   py-[3px] px-[5px] h-max mt-[2px]">
                   <p className="text-[11px] text-[#D0E3FF] font-sans   
                     font-normal mb-[0px]">
                      Type Of Identity Document
                   </p>
                   <div className="flex flex-row mt-[-5px]">
                     <select name="idProof" className="idSelector 
                       text-[#334EAC] text-[11px] font-sans font-bold 
                       bg-[#D0E3FF] border-none rounded-[5px] p-[5px] 
                        h-[28px] w-[149px] relative right-[6px] 
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
                </div>                
             </div>
             

             <div className="details-box4 grid grid-rows-2 align-middle 
                   p-[5px] relative left-[7px]">
                   <p className="text-[11px] text-[#D0E3FF] font-sans   
                     font-normal mb-[0px] relative left-[2px]">
                      Upload Proof Of Identity
                   </p>
                   <div className="flex flex-row align-middle 
                     justify-start relative 
                     mt-[-5px]">
                     <input className="fileUpload py-[5px] px-[3px] 
                       w-[151px] h-[max-content] text-[#334EAC] 
                       text-[9px] font-sans font-bold 
                       bg-[#D0E3FF] border-none rounded-[5px]" type="file" accept=".jpg, .png, .pdf "/>
                  </div>
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

export default SignUp
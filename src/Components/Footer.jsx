
import React from 'react';
import '../styles/styling.css'


function Footer() {

  // const today = new Date(); 
  // console.log(today);
  // console.log(today.toLocaleDateString());

  const year = new Date().getFullYear();
  // console.log(year);

  // const options = {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",};
  //   console.log(new Date().toLocaleDateString('en-us', options));

  return (
    <>

    <footer className="footerBox p-[10px] bg-[#334EAC]">

     <p className="text-[#D0E3FF] text-center 
       font-sans font-normal text-[13px]">
        <i className="fas fa-copyright bg-transparent mr-2"></i> {year} All Rights Reserved By max-Home
     </p>

    </footer>

      
    </>
  )
}

export default Footer
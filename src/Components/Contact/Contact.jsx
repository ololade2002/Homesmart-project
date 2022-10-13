
import React from 'react';
import lamp from '../../assets/lamp.png';
import app from '../../assets/app.svg';


const Contact = () => {


  return (
 <div id='contact' className="contact relative dark:text-white overflow-y-hidden overflow-x-hidden ">
<div className='w-11/12 mx-auto  flex flex-col md:flex-row gap-4'>

<div className='flex-1 h-[100vh]  mx-auto justify-center'>
    <img className='mx-auto mb-10' src={lamp} alt="" />
    <button className='flex bg-amber-400 mx-auto py-2 px-3 mb-10 drop-shadow-2xl text-[16px] 
    hover:drop-shadow-none items-center rounded-md gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
   Download the App </button>
    <img className='mx-auto z-10 relative w-36 sm:w-44 md:w-52 lg:w-[15rem]' src={app} alt="" />
   
</div>

<div className='flex-1 mt-10  py-8 rounded-md flex flex-col  items-center w-12/12'>
<h3 className='text-2xl mb-10 text-center dark:text-white text-black font-medium'>GET IN TOUCH</h3>
<form className='flex flex-col dark:text-white w-10/12 gap-10' >

<div className="relative z-0 ">
    <input type="text" id="floating_standard" name='name' className="block dark:text-white w-full  py-2.5 px-4  text-sm border-4   bg-transparent
     border-amber-400 appearance-none rounded-xl  focus:outline-none focus:ring-0  peer" placeholder=" " />
    <label  className="absolute scale-75  text-md text-md  px-6 duration-300 dark:text-white dark:peer-focus:text-white
     transform -translate-y-10 top-3 focus:text-white -z-10 origin-[0]   peer-focus:left-0 peer-focus:text-black
     peer-focus:text-2xl peer-focus:-top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
     peer-focus:scale-75 peer-focus:-translate-y-6">NAME</label>
</div>

<div className="relative z-0 ">
    <input type="text" id="floating_standard" name='email address' className="block  w-full  py-2.5 px-4  text-sm border-4   bg-transparent
     border-amber-400 appearance-none rounded-xl  focus:outline-none focus:ring-0  peer" placeholder=" " />
    <label  className="absolute text-md text-black text-md px-6 duration-300  dark:text-white dark:peer-focus:text-white
     transform -translate-y-10 scale-75 top-3 -z-10 origin-[0]  peer-focus:left-0 peer-focus:text-black 
     peer-focus:text-2xl peer-focus:-top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
     peer-focus:scale-75 peer-focus:-translate-y-6">EMAIL ADDRESS</label>
</div>


<div className="relative z-0 ">
    <input type="text" id="floating_standard" name='phone' className="block  w-full  py-2.5 px-4  text-sm border-4   bg-transparent
     border-amber-400 appearance-none rounded-xl  focus:outline-none focus:ring-0  peer" placeholder=" " />
    <label  className="absolute text-md text-black text-md px-6 duration-300 dark:text-white dark:peer-focus:text-white
     transform -translate-y-10 scale-75 top-3 -z-10 origin-[0]  peer-focus:left-0 peer-focus:text-black 
     peer-focus:text-2xl peer-focus:-top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
     peer-focus:scale-75 peer-focus:-translate-y-6">PHONE</label>
</div>

<div className="relative z-0 ">
    <input type="text" id="floating_standard" name='phone' className="block  w-full  py-2.5 px-4  text-sm border-4   bg-transparent
     border-amber-400 appearance-none rounded-xl  focus:outline-none focus:ring-0  peer" placeholder=" " />
    <label  className="absolute text-md text-black text-md px-6 duration-300 dark:text-white dark:peer-focus:text-white
     transform -translate-y-10 scale-75 top-3 -z-10 origin-[0]  peer-focus:left-0 peer-focus:text-black 
     peer-focus:text-2xl peer-focus:-top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
     peer-focus:scale-75 peer-focus:-translate-y-6">MESSAGE</label>
</div>


<button className='btn px-4 py-2 dark:text-white bg-amber-400 drop-shadow-2xl hover:drop-shadow-none text-black mx-auto rounded-lg '>Sign Up</button>

</form>
</div>

</div>
 </div>
  )
}

export default Contact;
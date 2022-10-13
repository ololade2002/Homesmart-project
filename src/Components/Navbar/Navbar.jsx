
import React from 'react';
import home from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import { useState } from 'react';

const Navbar = () => {

  const [mobile,setMobile] = useState(false)

  return (
   <div className="navbar relative">
   <nav className="mx-auto relative p-2  md:p-4 md:border-0 ">
    <div className='md:flex flex items-center justify-between  md:justify-between md:ml-[2rem] md:mr-[2rem] p-4'>

    <div className='md:order-2'>
    <a href="/">
        <img width={200} className=' w-32 md:w-44' src={home} alt="" />
    </a>
  </div>



  <div className='md:order-1'>
    <ul className='hidden md:flex md:gap-12  nav-link'>
        <a href="#/"><li className='dark:text-black  hover:text-teal-900'>Home</li></a>
        <a href="#contact"><li className='dark:text-black  hover:text-teal-900'>Contact</li></a>
    </ul>
  </div>

  <div className='md:order-3'>
    <div className="register hidden md:flex md:gap-12 nav-link">
        <button className='dark:text-black hover:text-teal-900'>Login</button>
        <button className='hover:drop-shadow-xl bg-teal-900 px-4 py-2 rounded-md text-white'>Sign Up</button>
    </div>
  </div>

<div className='mobile bg-gradient-to-b from-amber-400 to-amber-600 md:hidden'>
    <ul className={mobile ? 'mobile-nav' : 'nav-link'}onClick={()=>setMobile(false)}>
      <a href="#/"><li>Home</li></a>
      <a href="#contact"><li>Contact</li></a>
      <li>Login</li>
      <li>Sign Up</li>
    </ul>
  </div> 

<button className='menu md:hidden' onClick={()=> setMobile(!mobile)}>
  {mobile ? <img src={close} alt="" />: <img src={menu} alt="" /> }
</button>

    </div>
   </nav>
   </div>
  )
}

export default Navbar;
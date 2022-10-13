
import React from 'react';
import Navbar from '../Navbar/Navbar';
import chair from '../../assets/couch.png';
import black from '../../assets/app.svg';

const Hero = () => {
  return (
   <div id='/' className="hero h-full  w-full bg-gradient-to-b from-amber-400 to-amber-600">
  <Navbar/>
  {/*HEro Body*/}
  <div className="hero-body  relative pt-28 ">
   <div className='reletive  flex justify-center translate-y-16 sm:translate-y-24 md:translate-y-40 lg:translate-y-32'>
    <img className='relative w-[93%]' src={chair} alt="" />
    <img className='absolute -top-14 sm:-top-16  w-28 sm:w-44 md:w-52 lg:w-[15rem]' src={black} alt="" />
   </div>
  </div>


   </div>
  )
}

export default Hero;
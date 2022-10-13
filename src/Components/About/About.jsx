
import React from 'react';
import dot from '../../assets/dots.svg';

const About = () => {
  return (
   <div className="about  h-auto mb-16 mt-32 md:mt-44 lg:mt-44 xl:mt-44">
  <div className=''>
    <button className='flex bg-amber-400 mx-auto py-2 px-3 drop-shadow-2xl text-[16px] 
    hover:drop-shadow-none items-center rounded-md gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
   Download the App </button>
  </div>

{/*About Body*/}
  <div className="about-body mt-20 relative md:flex">
  <img className='hidden md:flex' src={dot} alt="" />


<div className='flex flex-col md:flex-row  md:w-[80%] px-6 items-center mx-auto gap-8'>

<div className="icon-1 text-center flex-1 w-full  ">
    <div className='h-24 w-24 mb-3 border-8 mx-auto border-amber-400 rounded-full flex justify-center items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
    </div>
    <h3 className='text-[1.7rem] font-semibold mb-3 '>Safe</h3>
    <p className='text-[15px] mb-3'>Our products are secure and private out-of-the-box</p>
</div>

<div className="icon-2 text-center flex-1 w-full">
    <div className='h-24 w-24 mb-3 border-8 mx-auto border-amber-400 rounded-full flex justify-center items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
    </div>
    <h3  className='text-[1.7rem] font-semibold mb-3 '>Efficient</h3>
    <p className='text-[15px] mb-3'> Feel good about your wallet and the environment</p>
</div>

<div className="icon-3 text-center flex-1 w-full">
    <div className='h-24 w-24 mb-3 border-8 mx-auto border-amber-400 rounded-full flex justify-center items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
    </div>
    <h3 className='text-[1.7rem] font-semibold mb-3 '>Proven</h3>
    <p className='text-[15px] mb-3'>Leading the Smart Home world for 10 years</p>
</div>

</div>
<img className='hidden md:flex' src={dot} alt="" />
  </div>
   </div>
  )
}

export default About;
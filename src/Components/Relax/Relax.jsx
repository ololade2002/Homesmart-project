
import React from 'react';
import table from '../../assets/table.png';

const Relax = () => {
  return (
   <div className="relax relative pb-32  md:pb-0 overflow-y-hidden overflow-x-hidden ">
    <div className='body h-auto w-11/12 md:w-10/12 mx-auto flex flex-col-reverse md:flex-row gap-12 justify-center items-center relative'>

<div className='flex-1 mb-14 md:mb-0 text-left md:w-12/12 md:text-left'>
    <h2 className='text-3xl   font-semibold mb-4'>Relax,you're home!</h2>
    <p className='mb-4 font-light'>All our supported hardware includes traditional
         inputs so you can integrate our products into your 
         house in a way that’s best for everyone.</p>
         <button className='px-6 drop-shadow-2xl hover:drop-shadow-none py-2 bg-amber-400 rounded-lg font-medium'>Sign Up</button>
</div>

<div className='flex-1  relative'>
    <img src={table} alt="" className='mx-auto z-10 relative w-12/12 ' />
</div>

    </div>

    <div className="circle h-52 w:52 md:h-[20rem] md:w-[20rem] aspect-square -right-20 md:-right-12
      absolute border-8 border-amber-400 -translate-y-24  md:-translate-y-72 rounded-full"></div>
    <div className="square bg-teal-900 h-36 z-0  md:-translate-y-28 absolute   w-full"></div>

   </div>
  )
}

export default Relax;
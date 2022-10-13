
import React from 'react';
import img1 from '../../assets/partner1.svg';
import img2 from '../../assets/partner2.svg';
import img3 from '../../assets/partner3.svg';
import img4 from '../../assets/partner4.svg';
import img5 from '../../assets/partner5.svg';
import img6 from '../../assets/partner6.svg';
import img7 from '../../assets/partner7.svg';

const Partner = () => {
  return (
  <div className="partner mb-32  w-11/12  md:w-9/12  mx-auto">
<div className=' md:w-7/12  mx-auto text-center'>
    <h2 className='text-amber-400 pt-8 text-3xl font-semibold mb-4'>Our Partners</h2>
    <p className='text-[14px]'>We’ve partnered with hundreds of smart home brands to help you create a 
        smart home that fits your needs and doesn’t lock you in.</p>
</div>

<div className="sponsors w-10/12 md:w-7/12  justify-center mx-auto mt-16 flex gap-8 flex-wrap ">
    <img  className='bg-white box  rounded-md py-6 px-3' src={img1} alt="" />
    <img  className='bg-white box  rounded-md py-6 px-3' src={img2} alt="" />
    <img  className='bg-white box  rounded-md py-6 px-3' src={img3} alt="" />
    <img  className='bg-white box  rounded-md py-6 px-3' src={img4} alt="" />
    <img  className='bg-white box  rounded-md py-6 px-3' src={img5} alt="" />
    <img  className='bg-white box  rounded-md py-6 px-3' src={img6} alt="" />
    <img  className='bg-white box  rounded-md py-6 px-3' src={img7} alt="" />
</div>

  </div>
  )
}

export default Partner;
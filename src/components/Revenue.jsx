import React from 'react';
import Image from '../assets/images/webp/revenue-image-1.webp';
import Imagetwo from '../assets/images/webp/revenue-image-2.webp';

const Revenue = () => {
    return (
        <div className='bg-cream py-[120px] max-lg:py-[80px] max-md:py-[60px]'>
            <div className='max-w-[944px] mx-auto px-4'>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='w-full lg:w-7/12 mb-8 lg:mb-0'>
                        <div className='relative'>
                            <img src={Image} alt="girl-image" className='rounded-[40px] w-full lg:w-[480px] mx-auto lg:mx-0' />
                            <img src={Imagetwo} alt="revenue-image" className='absolute w-[218px] rounded-[20px] top-[10%] left-[5%] lg:left-[20%] lg:top-[61px]' />
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12 flex justify-center lg:justify-end'>
                        <div className='text-center lg:text-left'>
                            <div className='w-[36px] h-[36px] bg-dark-blue rounded-full abril text-white font-semibold text-[28px] flex items-center justify-center mx-auto lg:mx-0'>1</div>
                            <h2 className='abril text-dark-blue font-semibold leading-[45px] max-w-[364px] text-[39px] pt-[14px] mx-auto lg:mx-0'>Get an AI evaluation of your supply chain needs</h2>
                            <p className='max-w-[333px] font-medium text-[22px] leading-[30px] font-poppins text-dark-blue pt-[6px] pb-5 mx-auto lg:mx-0'>By analyzing your sales velocity and growth potential.</p>
                            <button className='font-poppins font-medium text-[12px] leading-[20px] text-white bg-custum-blue py-[6px] px-5 rounded-[24px] hover:bg-white hover:text-custum-blue transition-all duration-300 mx-auto lg:mx-0'>Apply now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revenue;

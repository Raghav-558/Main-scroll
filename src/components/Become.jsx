import React from 'react';
import Image from '../assets/images/webp/become-image.webp';

const Become = () => {
    return (
        <div className='bg-white pt-[47px] pb-[48px] max-lg:py-[60px]'>
            <div className='max-w-[1240px] mx-auto px-6'>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='w-full lg:w-6/12'>
                        <div className='max-lg:text-center'>
                            <h2 className='abril font-semibold text-[39px] leading-[45px] text-dark-blue pb-5 max-sm:pb-[14px] max-w-[401px] max-md:text-[28px] max-md:leading-[34px]  max-lg:max-w-none'>Become an 8 figure seller with AI funding</h2>
                            <button className='font-poppins font-medium text-base leading-6 text-white bg-custum-blue rounded-[24px] py-[10px] px-[44px] hover:bg-white hover:text-custum-blue border border-custum-blue transition-all duration-300 max-sm:text-sm max-sm:py-[9px] max-sm:px-6 hover:border hover:border-custum-blue'>Apply now</button>
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12 max-lg:pt-10'>
                        <div className='lg:flex lg:justify-end'>
                            <img src={Image} alt="become-image" className='rounded-[40px] max-w-[440px] w-full max-lg:mx-auto ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Become;

import React from 'react';
import Image from '../assets/images/webp/revenue-image-1.webp';
import Imagetwo from '../assets/images/webp/revenue-image-2.webp';
import Revenuegirl from '../assets/images/webp/revenue-girl.webp';

const Revenue = () => {
    return (
        <div className='bg-cream py-[120px] max-lg:py-[80px] max-md:py-[60px]'>
            <div className='max-w-[1068px] pl-[106px] pr-4 mx-auto max-md:pl-[52px] max-sm:pl-4'>
                <div className='flex flex-wrap -mx-3 justify-between max-md:flex-col-reverse'>
                    <div className='max-md:w-full w-1/2 px-3 max-md:pt-[84px] max-md:flex max-md:justify-center'>
                            <div className='relative max-w-max max-sm:ml-8 '>
                                <img src={Image} alt="Image" className='h-80 max-lg:h-72 max-md:h-[258px] rounded-[40px] object-cover' />
                                <img src={Imagetwo} alt="Imagetwo" className='h-[171px] max-lg:h-40 max-md:h-[139px] absolute md:top-[145px] md:-translate-y-1/2 md:-left-[102px] object-cover max-md:hidden rounded-[20px]' />
                                <img src={Revenuegirl} alt="Revenue-girl" className='h-[171px] max-lg:h-40 max-md:h-[139px] absolute md:top-1/2 md:-translate-y-1/2 md:-left-[90px] object-cover max-md:-top-11 max-md:-left-9 md:hidden ' />
                            </div>
                    </div>
                    <div className='max-md:w-full max-lg:w-1/2 w-5/12 px-3'>
                        <div className='max-md:text-center'>
                            <div className='w-9 h-9 rounded-full bg-[#0E1122] flex justify-center text-[28px] text-white max-md:mx-auto abril'>1</div>
                            <p className='font-semibold text-[39px] max-lg:text-4xl max-md:text-[28px] max-md:leading-9 leading-[45px] text-[#0E1122] md:max-w-[358px] pt-[19px] pb-1 max-md:py-[14px] abril'>Get an AI evaluation of your supply chain needs</p>
                            <p className='font-poppins font-medium text-[22px] max-lg:text-xl max-md:text-lg max-md:leading-7 leading-[30px] text-[#0E1122] pb-5 max-md:pb-[14px]'>By analyzing your sales velocity and growth potential.</p>
                            <button className='font-poppins text-xs max-md:text-sm font-medium leading-5 border border-custum-blue text-white px-5 py-[6px] bg-custum-blue rounded-3xl hover:bg-white hover:text-custum-blue transition-all duration-300'>Apply now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Revenue;

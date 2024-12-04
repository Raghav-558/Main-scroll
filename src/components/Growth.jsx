import React from 'react'
import Logo1 from '../assets/images/webp/growth-logo.webp';
import Logo2 from '../assets/images/webp/trustpilot.webp';


const Growth = () => {
    return (
        <div className='bg-dark-blue py-[87px] max-md:py-[52px]'>
            <div className='max-w-[1167px] mx-auto px-6'>
                <div className='flex flex-wrap '>
                    <div className='w-1/2 lg:w-3/12'>
                        <div>
                            <img src={Logo1} alt="Accredided-business" className='max-w-[83px] max-md:max-w-[53px]} mx-auto' />
                            <p className='abril font-semibold text-[50px] leading-[68px] text-white text-center pt-[10px] max-md:pt-[6px] max-md:text-[31.97px] max-md:leading-[43.39px]'>‘A’ Rating </p>
                        </div>
                    </div>
                    <div className='w-1/2 lg:w-3/12'>
                        <div>
                            <p className='font-poppins font-normal text-[19px] leading-[30px] text-white text-center max-md:text-xs max-md:leading-5'>Average store growth</p>
                            <p className='abril font-semibold text-[50px] leading-[68px] text-white text-center pt-[10px] max-md:pt-[6px] max-md:text-[31.97px] max-md:leading-[43.39px]'>400%</p>
                        </div>
                    </div> <div className='w-1/2 lg:w-3/12 max-lg:pt-[52px]'>
                        <div>
                            <img src={Logo2} alt="Trustpilot" className='max-w-[140px] max-md:max-w-[89px] mx-auto' />
                            <p className='abril font-semibold text-[50px] leading-[68px] text-white text-center pt-[10px] max-md:pt-[6px] max-md:text-[31.97px] max-md:leading-[43.39px]'>Excellent </p>
                        </div>
                    </div> <div className='w-1/2 lg:w-3/12 max-lg:pt-[52px]'>
                        <div>
                            <p className='font-poppins font-normal text-[19px] leading-[30px] text-white text-center max-md:text-xs max-md:leading-5'>Funding given</p>
                            <p className='abril font-semibold text-[50px] leading-[68px] text-white text-center pt-[10px] max-md:pt-[6px] max-md:text-[31.97px] max-md:leading-[43.39px]'>$450M+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Growth
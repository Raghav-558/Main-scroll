import React from 'react'
import Background from '../assets/images/webp/hero-bg.webp';
import logo from '../assets/images/webp/logo.webp'

const HeroSection = () => {
    return (
        <div className='bg-hero bg-cover bg-no-repeat bg-center'>
            <a href="#"><img src={logo} alt="page-logo" className='w-[50px] py-6 mx-6' /></a>
            <div className='px-5'>
                <div className='pt-[263px] pb-[224px] max-sm:pb-[60px]'>
                    <h1 className='font-bold text-[62.12px] leading-[66px] text-white max-w-[478px] abril max-md:text-[56px] max-sm:text-[47px] max-md:leading-[55px]'>Get AI funding for your store</h1>
                    <p className='font-poppins text-white font-medium text-[22px] leading-[30px] max-w-[408px] py-6 max-sm:py-3 max-md:text-xl max-sm:text-[18px] max-md:leading-7'>AI technology that predicts, plans, and protects your cash flow.</p>
                    <button className='font-poppins font-medium text-base leading-6 py-[10px] px-[44px] bg-custum-blue text-white rounded-[24px] hover:bg-white hover:text-custum-blue transition-all duration-300 max-sm:py-[9px] max-sm:px-6 max-sm:text-sm'>Get funded</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
import React from 'react';
import Amazon from '../assets/images/webp/amazon.webp';
import Shopify from '../assets/images/webp/shopify.webp';
import Ebay from '../assets/images/webp/ebay.webp';
import commerce from '../assets/images/webp/big-commerce.webp';

const Platform = () => {
    return (
        <div className='bg-dark-blue'>
            < div className='md:max-w-3xl flex items-center mx-auto px-4 gap-[52px] pt-[46px] pb-[54px] max-lg:py-[60px] max-md:gap-8 max-sm:flex-wrap max-md:justify-center' >
                <div>
                    <p className='font-poppins text-white font-medium text-sm max-md:text-xs leading-[22px] uppercase'>main supported platforms</p>
                </div>
                <div className='flex items-center gap-[52px] max-md:gap-8 max-sm:flex-wrap max-sm:justify-center'>
                    <a href="https://www.amazon.in/" target='_blank'>
                        <img src={Amazon} alt="Amazon" className='h-5 max-sm:h-[25px]' />
                    </a>
                    <a href="https://open.spotify.com/" target='_blank'>
                        <img src={Shopify} alt="Shopify-music" className='h-6 max-sm:h-[29px]' />
                    </a>
                    <a href="https://www.ebay.com/" target='_blank'>
                        <img src={Ebay} alt="Ebay" className='h-6 max-sm:h-[29px]' />
                    </a>
                    <a href="https://www.bigcommerce.com/" target='_blank'>
                        <img src={commerce} alt="big-commerce" className='h-6 max-sm:h-[23px]' />
                    </a>
                </div>
            </div >
        </div>
    )
}

export default Platform;

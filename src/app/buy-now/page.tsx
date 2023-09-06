'use client'
import Rect from 'react';
import Image from 'next/image';
import { SectionHeading } from '../Components/SectionHeading/SectionHeading';
import SaleCard from '../Components/SaleCard/SaleCard';
const BuyNow = () => {
    
    return <>
    <div className="px-[135px] pt-[80px] pb-[140px] flex flex-row items-center justify-between">
        <div className='flex flex-row items-center justify-between gap-[30px]'>
            <div className='flex flex-col items-center gap-[16px]'>
                <div className='w-[170px] h-[138px] bg-[#F5F5F5] flex flex-row items-center justify-center'>
                <Image alt = '' width={114} height={121} src='/image 63.png'/>    
                </div>
                <div className='w-[170px] h-[138px] bg-[#F5F5F5] flex flex-row items-center justify-center'><Image alt = '' width={114} height={121} src='/image 63.png'/></div>
                <div className='w-[170px] h-[138px] bg-[#F5F5F5] flex flex-row items-center justify-center'><Image alt = '' width={114} height={121} src='/image 63.png'/></div>
                <div className='w-[170px] h-[138px] bg-[#F5F5F5] flex flex-row items-center justify-center'><Image alt = '' width={114} height={121} src='/image 63.png'/></div>
            </div>
            <div className='w-[500px] h-[600px] flex flex-row items-center justify-center bg-[#F5F5F5]'>
        	    <Image alt = '' width={446} height={315} src='/image 63.png'/>
            </div>      
        </div>
        <div className=''>
                <h1 className='text-[24px] font-semibold leading-[24px]'>Havic HV G-92 Gamepad</h1>
                <div className='flex flex-row items-center mt-[16px]'>
                    <Image src = '/Vectorfd.png' alt='' width={20} height={20}/> 
                    <Image src = '/Vectorfd.png' alt='' width={20} height={20}/> 
                    <Image src = '/Vectorfd.png' alt='' width={20} height={20}/> 
                    (150 Reviews)  |  <span className='text-[#00FF66] text-[14px]'>In Stock</span>
                </div>
                <div className='text-[24px] leading-[24px] font-normal mt-[16px]'>$192.00</div>
                <p className='py-[24px] border-b-2 border-gray-500 max-w-[373px]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                
                
                
                <div className='flex flex-col gap-[24px] py-[24px]'>
            
            
            <div className='flex flex-row items-center gap-[8px]'>
                <h1 className='text-[20px] leading-[20px]'>Colors:</h1>
                <div className='w-[20px] h-[20px] rounded-[100%]  bg-red-500'></div>
                <div className='w-[20px] h-[20px] rounded-[100%]  bg-red-500'></div>
                <div className='w-[20px] h-[20px] rounded-[100%]  bg-red-500'></div>
            </div>
            <div className='flex flex-row items-center gap-[24px]'>
                <h1 className='text-[20px] leading-[20px]'>Size:</h1>
                <div className='flex flex-row items-center gap-[16px]'>
                   {
                    ['XS','S','M', 'L', 'XL'].map((element,idx)=> {
                        return <div key={idx} className='w-[32px] h-[32px] text-[14px] font-semibold hover:bg-[#DB4444] hover:text-white rounded-[4px] border-2 border-gray-500 flex flex-row items-center justify-center'>{element}</div>
                    })
                   } 
                </div>
                
            </div>
            <div className='flex flex-row items-center gap-[16px]'>
                <div className='border-2 border-gray-500 w-[159px] flex flex-row items-center  h-[44px] rounded-[4px]'>
                    <button className='hover:bg-[#DB4444] hover:text-white w-[40px] h-full flex flex-row items-center justify-center'>-</button>
                    <div className='border-2 border-gray-500 w-[80px] h-[44px] flex flex-row items-center justify-center'>2</div>
                    <button className='hover:bg-[#DB4444] hover:text-white w-[40px] h-full flex flex-row items-center justify-center'>+</button>
                </div>
                <button className='w-[165px] h-[44px] bg-transparent hover:bg-[#DB4444] border-[1px] border-gray-500 rounded-[4px]'>Buy Now</button>
                <div className='border-[1px] border-gray-500 w-[40px] h-[40px] flex rounded-[4px] flex-row items-center justify-center group hover:bg-[#DB4444]'>
                    <Image alt = '' width={20} height={17} src = '/Vector.png' className='group-hover:invert'/>
                </div>
            </div>
            
 



        </div>
        <div className='mt-[16px] flex flex-col py-[24px] px-[16px] border-[1px] border-gray-500 rounded-[4px]'>
                   <div className='flex flex-row items-center gap-[16px] border-b-2 border-gray-500 '>
                    <Image alt = '' width={40} height={40} src='/icon-delivery.png' className='invert'/>
                    <div className='flex flex-col gap-[8px]'>
                        <h1>Free Delivery</h1>
                        <h1>Enter your postal code for Delivery Availability</h1>
                    </div>
                   </div>
                   <div className='flex flex-row items-center gap-[16px] '>
                   <Image alt = '' width={40} height={40} className='invert' src='/icon-delivery.png'/>
                    <div className='flex flex-col gap-[8px]'>
                        <h1>Free Delivery</h1>
                        <h1>Enter your postal code for Delivery Availability</h1>
                    </div>
                            
                    </div>
                    </div>
        </div>
        
    </div>

    <div className='px-[135px] mb-[140px]'>
                <SectionHeading text='Related Item'/>
                <div className='mt-[60px]'>
                <SaleCard/>
                </div>
    </div>
    </>
}
export default BuyNow;
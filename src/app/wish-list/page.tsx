import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '../Components/SectionHeading/SectionHeading';
const WishList = () => {
    return <div className='pt-[80px] px-[135px]'>
        <div className='flex flex-row items-center justify-between'>
            <h1 className='text-[20px] font-normal leading-[26px]'>Wishlist (4)</h1>
            <button className='border-[1px] border-[#00000080] w-[223px] h-[56px] rounded-[4px] font-semibold leading-[24px] text-[16px] flex flex-row items-center justify-center'>Move All To Bag</button>
            </div> 

            <div className='pt-[60px] pb-[80px]'>
            <div className="w-[270px] h-[350px]">
        <div className="w-full group relative h-[250px] bg-[#F5F5F5] relative flex flex-row items-center justify-center rounded-[4px]">
            <div className="w-[178px] h-[129px] relative flex flex-row  items-center justify-center">
                <Image alt = "" src = "/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png" layout="fill" objectFit="cover"/>
            </div>
            <div className="absolute flex flex-row  justify-between w-full px-[12px] py-[12px] top-0 left-0">
                <div className="w-[55px] h-[26px] rounded-[4px] bg-[#DB4444] flex flex-row items-center justify-center text-white text-[12px] font-normal leading-[18px]">-40%</div>
                
                    
                    <div className="w-[34px] h-[34px] rounded-full bg-white flex flex-row items-center justify-center">
                        <Image alt = '' src = '/delete.png' width = {16} height={16}/>
                    </div>
                
                
            </div>
            <div className="absolute  duration-500 transition-all ease-in flex h-[41px] text-[16px] font-semibold bottom-0 w-full bg-black rounded-b-[4px] flex-row items-center justify-center text-white">Add To Cart</div>
        </div>
        <div className="flex flex-col gap-[8px] mt-[16px]">
            <div className="font-semibold text-[16px] leading-[24px]">HAVIT HV-G92 Gamepad</div>
            <div className="flex flex-row items-center gap-[12px]">
                    <p className="font-semibold text-[16px] leading-[24px] text-[#DB4444]">$120</p>
                    <p className="font-semibold text-[16px] leading-[24px] text-gray-600 line-through">$160</p>
            </div>
            <div className="flex flex-row items-center gap-[8px]">
                <Image alt="" src='/Vectorfd.png' width={20} height={20}/>
                <div>(88px)</div>
            </div>
        </div>
    </div>
            </div>
            <div className='flex flex-row items-center justify-between '>
            <SectionHeading text='Just For you'/>
            <button className='w-[150px] h-[56px] font-semibold text-[16px] leading-[24px] border-[1px] border-gray-500 rounded-[4px]'>See All</button>
            </div>
            <div className='mt-[60px] pb-[140px]'>
            <div className="w-[270px] h-[350px]">
        <div className="w-full group relative h-[250px] bg-[#F5F5F5] relative flex flex-row items-center justify-center rounded-[4px] ">
            <div className="w-[178px] h-[129px] relative flex flex-row  items-center justify-center">
                <Image alt = "" src = "/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png" layout="fill" objectFit="cover"/>
            </div>
            <div className="absolute flex flex-row  justify-between w-full px-[12px] py-[12px] top-0 left-0">
                <div className="w-[55px] h-[26px] rounded-[4px] bg-[#DB4444] flex flex-row items-center justify-center text-white text-[12px] font-normal leading-[18px]">-40%</div>
                
                    
                    <div className="w-[34px] h-[34px] rounded-full bg-white flex flex-row items-center justify-center">
                        <Image alt = '' src = '/Group (1).png' width = {20} height={16}/>
                    </div>
                
                
            </div>
            <div className="absolute  duration-500 transition-all ease-in flex h-[41px] text-[16px] font-semibold bottom-0 w-full bg-black rounded-b-[4px] flex-row items-center justify-center text-white">Add To Cart</div>
        </div>
        <div className="flex flex-col gap-[8px] mt-[16px]">
            <div className="font-semibold text-[16px] leading-[24px]">HAVIT HV-G92 Gamepad</div>
            <div className="flex flex-row items-center gap-[12px]">
                    <p className="font-semibold text-[16px] leading-[24px] text-[#DB4444]">$120</p>
                    <p className="font-semibold text-[16px] leading-[24px] text-gray-600 line-through">$160</p>
            </div>
            <div className="flex flex-row items-center gap-[8px]">
                <Image alt="" src='/Vectorfd.png' width={20} height={20}/>
                <div>(88px)</div>
            </div>
        </div>
    </div>
            </div>  
    </div>
}
export default WishList;
'use client'
import Image from "next/image"
import SaleCard from "../SaleCard/SaleCard"
import { SectionHeading } from "../SectionHeading/SectionHeading"
export default function FlashSale () {
    return <div className="pt-[100px] flex flex-col ">
        
        <SectionHeading text="Today’s"/>
        <div className="flex flex-row items-center justify-between ">
            <div className="flex flex-row items-center gap-[87px] mt-[24px]">
                <h1 className="font-semibold text-[36px] leading-[48px]">Flash Sales</h1>
                <div className="flex flex-row items-center gap-[17px]">
                    <div className="flex flex-col items-center">
                        <h1 className="text-[12px] font-normal leading-[18px]">Days</h1>
                        <p className="text-[32px] leading-[30px] font-bold">03</p>
                    </div>
                    <div className="text-[#E07575] text-[24px] ">:</div>
                    <div className="flex flex-col items-center">
                    <h1 className="text-[12px] font-normal leading-[18px]">Days</h1>
                        <p className="text-[32px] leading-[30px] font-bold">03</p>
                    </div>
                    <div className="text-[#E07575] text-[24px] ">:</div>
                    <div className="flex flex-col items-center">
                    <h1 className="text-[12px] font-normal leading-[18px]">Days</h1>
                        <p className="text-[32px] leading-[30px] font-bold">03</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center gap-[8px]">
                <button className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex flex-row items-center justify-center relative rotate-180"><Image alt = "" src = '/icons-arrow-right.png' width={16} height={14}/> </button>
                <button className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex flex-row items-center justify-center relative"><Image alt = "" src = '/icons-arrow-right.png' width={16} height={14}/> </button>
            </div> 
        </div>
        <div className="mt-[40px]">
        <SaleCard/>
        </div>

        <div className="flex flex-row items-center justify-center py-[60px]">
        <button className="w-[234px] h-[56px] bg-[#DB4444]  text-white rounded-[4px]">View All Products</button>
        </div>
    </div>
}
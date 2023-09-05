'use client'
import SaleCard from "../SaleCard/SaleCard";
// import SectionHeading from "../SectionHeading/SectionHeading";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import Image from "next/image";
export default function BestSellingProducts() {
return <div className="py-[70px]">
        <SectionHeading text = 'Our Products'/>
        <div className="flex flex-row items-center justify-between mt-[20px]">
            <div className="text-[36px] font-bold leading-[48px]">
               Explore Our Products 
            </div>
            <div className="flex flex-row items-center gap-[8px]">
                <button className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex flex-row items-center justify-center relative rotate-180"><Image alt = "" src = '/icons-arrow-right.png' width={16} height={14}/> </button>
                <button className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex flex-row items-center justify-center relative"><Image alt = "" src = '/icons-arrow-right.png' width={16} height={14}/> </button>
            </div>
            
        </div>
        <div className="mt-[60px]">
            <SaleCard/>
        </div>
        <div className="flex flex-row items-center justify-center mt-[60px]">
        <button className="w-[234px] h-[56px] bg-[#DB4444]  text-white rounded-[4px]">View All Products</button>
        </div>
</div>
}
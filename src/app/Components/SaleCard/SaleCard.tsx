'use client'
import Image from "next/image"
export default function SaleCard() {
    return <div className="">
    <div className="w-[270px] h-[350px]">
        <div className="w-full group relative h-[250px] bg-[#F5F5F5] relative flex flex-row items-center justify-center rounded-[4px]">
            <div className="w-[190px] h-[180px] relative flex flex-row  items-center justify-center">
                <Image alt = "" src = "/Frame-611.png" layout="fill" objectFit="cover"/>
            </div>
            <div className="absolute flex flex-row  justify-between w-full px-[12px] py-[12px] top-0 left-0">
                <div className="w-[55px] h-[26px] rounded-[4px] bg-[#DB4444] flex flex-row items-center justify-center text-white text-[12px] font-normal leading-[18px]">-40%</div>
                <div className="flex flex-col items-center gap-[8px]">
                    <div className="w-[34px] h-[34px] rounded-full bg-white flex flex-row items-center justify-center">
                        <Image alt = '' src = '/Vector.png' width = {24} height={24}/>
                    </div>
                    <div className="w-[34px] h-[34px] rounded-full bg-white flex flex-row items-center justify-center">
                        <Image alt = '' src = '/Group.png' width = {24} height={24}/>
                    </div>
                </div>
                
            </div>
            <div className="absolute hidden duration-500 transition-all ease-in group-hover:flex h-[41px] text-[16px] font-semibold bottom-0 w-full bg-black rounded-b-[4px]   flex-row items-center justify-center text-white">Add To Cart</div>
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
}
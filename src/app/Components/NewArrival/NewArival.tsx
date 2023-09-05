'use client'
import Image from "next/image"
import { SectionHeading } from "../SectionHeading/SectionHeading"

export const NewArrival = () => {
    return <div className="py-[70px]">
        <SectionHeading text="Featured"/>
        <h1 className="font-bold text-[36px] leading-[48px] mt-[20px]">New Arrival</h1>
        <div className="flex flex-row items-center mt-[60px] justify-between">
            <div className="w-[570px] h-[600px] relative bg-black rounded-[4px]">
                <Image alt = '' src='/ps5-slim-goedkope-playstation_large 1.png' layout="fill" objectFit="cover"/>
                <div className="flex flex-col absolute text-white bottom-5 left-5 max-w-[242px] gap-[16px]">
                    <h1 className="font-bold text-[24px] leading-[24px]">PlayStation 5</h1>
                    <p className="font-normal text-[14px] leading-[21px]">Black and White version of the PS5 coming out on sale.</p>
                    <p className="text-[16px] font-semibold leading-[24px]">Shop Now</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[32px] ">
                <div className="w-[570px] h-[286px] bg-[#0D0D0D] relative rounded-[4px]">
                    <Image alt = '' src = '/attractive-woman-wearing-hat-posing-black-background 1.png' className="float-right" width={432} height={286}/>
                    <div className="flex flex-col absolute text-white bottom-5 left-5 max-w-[255px] gap-[16px]">
                    <h1 className="font-bold text-[24px] leading-[24px]">Women’s Collections</h1>
                    <p className="font-normal text-[14px] leading-[21px]">Featured woman collections that give you another vibe.</p>
                    <p className="text-[16px] font-semibold leading-[24px]">Shop Now</p>
                </div>
                </div>
                <div className="flex flex-row items-center  gap-[32px] ">
                    <div className="relative w-[270px] h-[284px] flex flex-row items-center justify-center bg-[#000000] rounded-[4px]">
                        <Image alt = '' src='/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png' width={190} height={221}/>
                        <div className="flex flex-col absolute z-10 text-white bottom-5 left-5 max-w-[255px] gap-[8px]">
                    <h1 className="font-bold text-[24px] leading-[24px]">Speakers</h1>
                    <p className="font-normal text-[14px] leading-[21px]">Amazon wireless speakers</p>
                    <p className="text-[16px] font-semibold leading-[24px]">Shop Now</p>
                </div>
                    </div>
                    <div className=" relative w-[270px] h-[284px] flex flex-row items-center justify-center bg-[#000000] rounded-[4px]">
                    <Image alt = '' src='/Frame 706.png' width={190} height={221}/>
                    <div className="flex flex-col absolute z-10 text-white bottom-5 left-5 max-w-[255px] gap-[8px]">
                    <h1 className="font-bold text-[24px] leading-[24px]">Perfume</h1>
                    <p className="font-normal text-[14px] leading-[21px]">GUCCI INTENSE OUD EDP</p>
                    <p className="text-[16px] font-semibold leading-[24px]">Shop Now</p>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
'use client'
import Image from "next/image"
export default function Products () {
    return <div className="pt-[70px] w-full">
        <div className="flex flex-row w-full items-center justify-between bg-black py-[43px] px-[44px]">
            <div className="flex flex-col gap-[32px]">
                <h1 className="text-[#00FF66] font-bold text-[16px] leading-[20px]">Categories</h1>
                <p className="max-w-[443px] font-bold text-[48px] leading-[60px] text-white">Enhance Your Music Experience</p>
                <div className="flex flex-row items-center gap-[24px]">
                    <div className="flex flex-col items-center justify-center w-[62px] h-[62px] rounded-full bg-white">
                        <div className="font-bold text-[16px] leading-[20px]">23</div>
                        <div className="text-[11px] leading-[18px] font-normal">Hours</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[62px] h-[62px] rounded-full bg-white">
                        <div className="font-bold text-[16px] leading-[20px]">23</div>
                        <div className="text-[11px] leading-[18px] font-normal">Hours</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[62px] h-[62px] rounded-full bg-white">
                        <div className="font-bold text-[16px] leading-[20px]">23</div>
                        <div className="text-[11px] leading-[18px] font-normal">Hours</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[62px] h-[62px] rounded-full bg-white">
                        <div className="font-bold text-[16px] leading-[20px]">23</div>
                        <div className="text-[11px] leading-[18px] font-normal">Hours</div>
                    </div>
                </div>
                <div className="w-[171px] mt-[8px] flex flex-row items-center justify-center h-[56px] bg-[#00FF66] rounded-[4px] text-white font-semibold">Buy Now</div>
            </div>
            <div className="w-[600px] flex flex-row items-center justify-center h-[420px]">
                <div className="relative w-[568px] h-[330px]
                ">
                <Image
      src="/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
      layout="fill" objectFit="cover"
      alt="Picture of the author"
    />
                </div>
            </div>
        </div>
    </div>
} 
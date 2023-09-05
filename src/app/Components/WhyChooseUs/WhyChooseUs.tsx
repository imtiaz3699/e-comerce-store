'use client'
import Image from "next/image";

export default function WhyChooseUse () {
const data = [
    {
        img:'/icon-delivery.png',
        name:'FREE AND FAST DELIVERY',
        des:'Free delivery for all orders over $140',
    },
    {
        img:'/Icon-Customer service.png',
        name:'24/7 CUSTOMER SERVICE',
        des:'Friendly 24/7 customer support',
    },
    {
        img:'/Icon-secure.png',
        name:'MONEY BACK GUARANTEE',
        des:'We reurn money within 30 days',
    },
]
    return <div className="py-[70px] flex flex-row items-center justify-center gap-[88px]">
{
    data.map((element,idx)=> {
        return <div className="249px h-[161px] flex flex-col items-center gap-[24px]">
        <div className="w-[80px] h-[80px] rounded-full  bg-gray-400 flex flex-row items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-black flex flex-row items-center justify-center">
                <Image alt="" src={element.img} width={40} height={40}/>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-[20px] leading-[28px]">{element.name}</h1>
            <p className="text-[14px] font-normal leading-[21px]">{element.des}</p>
        </div>

    </div>
    })
}
        
    </div>
}
import Image from "next/image"
import { SectionHeading } from "../SectionHeading/SectionHeading"
export default function Categories () {
    const categoriesData = [
        {
            img:'/Category-CellPhone.png',
            name:"Phones",
        },
        {
            img:'/Category-Computer.png',
            name:"Computers",
        },
        {
            img:'/Category-SmartWatch.png',
            name:"SmartWatch",
        },
        {
            img:'/Category-Camera.png',
            name:"Camera",
        },
        {
            img:'/Category-Headphone.png',
            name:"HeadPhones",
        },
        {
            img:'/Category-Gamepad.png',
            name:"Gaming",
        },
    ]
    return <div className="border-y-[1px] border-gray-300 py-[80px]">
            <SectionHeading text= 'Categories'/>
            <div className="flex flex-row items-center justify-between mt-[20px]">
                <h1 className="font-semibold text-[36px] leading-[46px]">Browse By Category</h1>
                <div className="flex flex-row items-center gap-[8px]">
                <button className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex flex-row items-center justify-center relative rotate-180"><Image alt = "" src = '/icons-arrow-right.png' width={16} height={14}/> </button>
                <button className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] flex flex-row items-center justify-center relative"><Image alt = "" src = '/icons-arrow-right.png' width={16} height={14}/> </button>
            </div>
            </div>
            <div className="grid grid-cols-6 gap-[30px] place-items-center mt-[60px]">
                {
                    categoriesData.map((element,idx)=> {
                        return <div className="w-[170px] group hover:bg-[#DB4444] h-[145px] flex flex-col items-center justify-center gap-[16px] border-[1px] border-[#0000004D] rounded-[4px]">
                        <Image alt = '' src={element.img} width={56} height={56} className={`${idx === 3 ? "invert group-hover:invert-0" : ''}  group-hover:invert`}/>
                        <h1 className="text-[16px] font-normal leading-[24px] group-hover:text-white">{element.name}</h1>
                    </div>
                    })
                }
            </div>
    </div>
}
'use client'
import Image from "next/image";

export default function HeroSection () {
    const sideBar = [
        {
            name:'Woman’s Fashion',
            url:'',
            icon:'/DropDown.png',
        },
        {
            name:'Men’s Fashion',
            url:'',
            icon:'/DropDown.png',
        },
        {
            name:'Electronics',
            url:'',
        },
        {
            name:'Home & Lifestyle',
            url:'',
        },
        {
            name:'Medicine',
            url:'',
        },
        {
            name:'Sports & Outdoor',
            url:'',
        },
        {
            name:'Baby’s & Toys',
            url:'',
        },
        {
            name:'Groceries & Pets',
            url:'',
        },
        {
            name:'Health & Beauty',
            url:'',
        },
    ]
    return <div className="flex flex-row items-center gap-[45px] py-[40px]">
        <div className="flex flex-col gap-[16px] border-r-[1px] border-r-gray-700 pr-[16px]">
               {
                sideBar.map((element,idx)=> {
                    return <div key={idx} className="flex flex-row items-center justify-between w-[217px]">
                       <div>{element.name}</div>
                      {
                        element.icon && <Image alt = "" src = "/DropDown (1).png" width={24} height={24}/>
                      } 
                       </div>
                })
               } 
        </div>
        <div className="w-[892px] h-[344px] relative" >
            <Image alt = "" src = "/Frame 560.png" layout="fill" objectFit="cover"/>
        </div>
    </div>
} 
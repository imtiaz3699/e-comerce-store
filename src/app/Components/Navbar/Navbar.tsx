'use client'

import Image from "next/image"

export default function Navbar () {
    const navItems = [
        {
            name:'Home',
        },
        {
            name:'Contact',
        },
        {
            name:'About',
        },
        {
            name:'Sign Up',
        },
    ]
    return <div className="">
        <div className="flex flex-row items-center justify-end px-[136px] gap-[231px] text-white bg-black h-[48px] w-full">
            <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
            <div className="flex flex-row items-center gap-[5px]">
                <span>English</span> <Image alt = "" src = "/DropDown.png" width = {24} height={24}/>
            </div>
        </div>
        <div className="px-[136px] flex flex-row items-center justify-between pt-[40px] pb-[16px] border-b-[1px] border-b-gray-300">
            <h1 className="font-bold leading-[24px]">Exclusive</h1>
            <div className="flex flex-row items-center gap-[48px]">
                    {
                        navItems.map((element,idx)=> {
                            return <div>{element.name}</div>
                        })
                    }
            </div>
            <div className="flex flex-row items-center gap-[24px]">
            
 
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" className="py-[7px] px-[12px] text-sm text-white  rounded-md pl-10 bg-[#F5F5F5] focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." />
    </div>
    <Image alt = "" src = "/Wishlist.png" width={32} height={32}/>
    <Image alt = "" src = "/Cart1 with buy.png" width={32} height={32}/>
  

            </div>
        </div>
    </div>
}
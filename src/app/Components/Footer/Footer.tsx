'use client'

import Image from "next/image"
import React,{useState,useEffect} from 'react';
import WhyChooseUse from "../WhyChooseUs/WhyChooseUs"
import { usePathname } from "next/navigation";

export default function Footer () {
    const [state, setState] = useState(false);
    const pathName = usePathname();
    const support = [
        {
            name:'111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
            url:'',
        },
        {
            name:'exclusive@gmail.com',
            url:'',
        },
        {
            name:'+88015-88888-9999',
            url:'',
        },
    ]
    const account = [
        {
            name:'My Account',
            url:'',
        },
        {
            name:'Login / Register',
            url:'',
        },
        {
            name:'Cart',
            url:'',
        },
        {
            name:'Wishlist',
            url:'',
        },
        {
            name:'Shop',
            url:'',
        },
    ]
    const quickLinks = [
        {
            name:'Privacy Policy',
            url:'',
        },
        {
            name:'Terms of Use',
            url:'',
        },
        {
            name:'FAQ',
            url:'',
        },
        {
            name:'Contact',
            url:'',
        },
    ]
    useEffect(()=> {
        // const expr = 'Papayas';
        switch (pathName) {
          case '/':
          setState(true)  
          break;
          case '/about':
           setState(true)
            break;
            case '/signup':
           setState(false)
            break;
          default:
            // console.log(`Sorry, we are out of ${expr}.`);
            setState(false);
        }
    },[pathName])
        return <>
        {
            state && <WhyChooseUse/>
        }
        
         <div className="px-[135px] flex flex-row gap-[87px] py-[60px] bg-black text-white">
                <div className="flex flex-col gap-[24px]">
                    <h1 className="text-[24px] font-bold leading-[24px]">Exclusive</h1>
                    <p>Subscribe</p>  
                    <div>Get 10% off your first order</div>
                    <div className="mt-[-10px] relative flex flex-row items-center h-[48px] justify-between pr-2 w-[217px] border-2 border-white rounded-[4px]">
                    <input type="text" placeholder="Enter your email" className="text-[16px] pl-2 h-full w-[150px] outline-none bg-transparent py-2"/>
                        <button className="">
                            <Image alt="" src='/icon-send.png' width={24} height={24}/>
                        </button>
                    </div>  
                </div>
                <div className="flex flex-col gap-[24px]">
                <h1 className="text-[24px] font-bold leading-[24px]">Support</h1>
                {
                    support.map((element,idx)=> {
                        return <div className="max-w-[175px] text-[16px] font-normal leading-[24px]">{element.name}</div>
                    })
                }
                </div>
                <div className="flex flex-col gap-[24px]">
                <h1 className="text-[24px] font-bold leading-[24px]">Account</h1>
                {
                    account.map((element,idx)=> {
                        return <div className="max-w-[175px] text-[16px] font-normal leading-[24px]">{element.name}</div>
                    })
                }
                </div>
                <div className="flex flex-col gap-[24px]">
                <h1 className="text-[24px] font-bold leading-[24px]">Quick Links</h1>
                {
                    quickLinks.map((element,idx)=> {
                        return <div className="max-w-[175px] text-[16px] font-normal leading-[24px]">{element.name}</div>
                    })
                }
                </div>
                <div>
                <h1 className="text-[24px] font-bold leading-[24px]">Download App</h1>
                </div>
        </div>
        </>
}
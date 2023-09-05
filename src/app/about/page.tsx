import React,{useEffect,useState} from 'react';
import { usePathname } from 'next/navigation'; 
import Image from 'next/image';
export default function AboutUs () {
    
return <div>
<div className='pl-[120px] flex flex-row items-center justify-between py-[70px]'>
        <div className='flex flex-col max-w-[525px]'>
        <h1 className='font-bold text-[54px] leading-[64px]'>Our Story</h1>
        <br />
        <div>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            <br /><br />
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
        </div>
        </div>
        <div className='w-[705px] h-[609px] relative rounded-[4px]'>
            <Image alt='' className='rounded-[4px]' src = '/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png' layout='fill' objectFit='cover'/>
        </div>

      
</div>
            <div className=' px-[135px]'>

            <div className='flex flex-row items-center gap-[30px]'>
            <div className='w-[270px] flex flex-col items-center  h-[230px] rounded-[4px] border-[1px] border-gray-500'>
                <div className='w-[80px] h-[80px] rounded-full'>
            
                </div>
                <h1></h1>
                <p></p>
            </div>
            </div>


        </div>
</div>

}
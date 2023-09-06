import React,{useEffect,useState} from 'react';
import { usePathname } from 'next/navigation'; 
import Image from 'next/image';
export default function AboutUs () {
    const data = [
        {
            img:'/Groupfasdfads.png',
            number:'15.5K',
            sellers:'Sallers active our site',
        },
        {
            img:'/Icon-Sale.png',
            number:'33K',
            sellers:'Mopnthly Produduct Sale',
        },
        {
            img:'/Icon-Shopping bag.png',
            number:'45.5k',
            sellers:'Customer active in our site',
        },
        {
            img:'/Icon-Moneybag.png',
            number:'25k',
            sellers:'Anual gross sale in our site',
        },
    ]

    const owners = [
        {
            name:'Tom Cruise',
            img:'/image 46.png',
            position:"Founder & Chairman",
        },
        {
            name:'Emma Watson',
            img:'/image 51.png',
            position:"Managing Director",
        },
        {
            name:'Will Smith',
            img:'/image 47.png',
            position:"Product Designer",
        },
    ]
    
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
            <div className=' px-[135px] py-[70px]'>

            <div className='flex flex-row items-center gap-[30px]'>

            {
                data.map((element,idx)=> {
                    return <div key={idx} className='w-[270px] group hover:bg-[#DB4444] flex flex-col items-center justify-center  h-[230px] rounded-[4px] hover:border-0 border-[1px] border-gray-500'>
                    <div className='w-[80px] h-[80px] rounded-full group-hover:bg-white group-hover:bg-opacity-50 bg-gray-500 flex flex-row items-center justify-center'>
                            <div className='w-[58px] h-[58px]  rounded-full flex flex-row items-center justify-center group-hover:bg-white bg-black'>
                                    <Image alt='' src={element.img} className={`${idx === 1 ? "invert group-hover:invert-0" : "group-hover:invert"}`} width={32} height={32}/>
                            </div>
                    </div>
                    <h1 className='group-hover:text-white font-bold text-[32px] leading-[30px] mt-[24px]'>{element.number}</h1>
                    <p className='group-hover:text-white font-normal leading-[24px] text-[16px] mt-[12px]'>{element.sellers}</p>
                </div>
                })
            }
            



            </div>


        </div>

        <div className='py-[70px] px-[135px] flex flex-row items-center gap-[30px]'>
          {
            owners.map((element,idx)=> {
                return <div key={idx} className='flex flex-col w-[370px] h-[564px]'>
                <div className='w-[370px] h-[430px] flex flex-row items-end justify-center bg-[#F5F5F5] rounded-[4px]'>
                    <div className='relative w-[300px] h-[400px] '>
                    <Image alt='' src={element.img} layout='fill' objectFit='cover'/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-semibold text-[32px] leading-[30px] mt-[32px]'>{element.name}</h1>
                    <p className='text-[16px] font-normal leading-[24px] mt-[8px]'>{element.position}</p>
                    <div className='flex flex-row items-center gap-[16px] mt-[16px]'>
                        <Image alt='' src='/Icon-Twitter.png' width={24} height={24}/>
                        <Image alt='' src='/icon-instagram.png' width={24} height={24}/>
                        <Image alt='' src='/Icon-Linkedin.png' width={24} height={24}/>
                    </div>
                </div>
        </div>
            })
          }    
        </div>

</div>

}
'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
    return <div className='pt-[80px] pb-[140px] px-[135px]'>
                
                <div className='w-full h-auto flex flex-col items-center gap-[40px] mt-[40px]'>
                <div className='w-full h-[72px] drop-shadow-xl shadow-xl  px-[40px] flex flex-row items-center justify-between'>
               {
                ['Product','Price','Quantity','SubTotal'].map((element,idx)=> {
                       return <p className='font-normal grow-0 text-[16px] leading-[24px]' key={idx}>{element}</p>
                })
               } 
               
                </div>
                <div className='w-full h-[72px] drop-shadow-xl shadow-xl  px-[40px] flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center justify-start grow-0  gap-[22px]'>
                        <div className='w-[54px] h-[54px] relative'>
                            <Image alt = '' src = '/Monitor-Cart-Small.png' layout = 'fill' objectFit = 'cover'/>
                        </div>
                        <div className='text-[16px] font-normal leading-[24px]'>LCD Monitor</div>
                    </div>
                    <div className='text-[16px] font-normal  grow-0 leading-[24px]'>$650</div>
                    <div className='grow-0'>
                    <input type="number" className='w-[72px]  h-[44px] rounded-[4px] border-2 border-gray-500 text-[16px] font-normal leading-[24px] outline-none py-[6px] px-[12px]'/>
                    </div>
                    <div className='text-[16px]  font-normal leading-[24px]  grow-0'>$650</div>
                </div>
                </div>
                <div className='mt-[24px] flex flex-row items-center justify-between'>
                    <button className='w-[218px] h-[56px] border-[1px] border-gray-500 font-semibold text-[16px] leading-[24px] rounded-[4px]'>Return to Shop</button>
                    <button className='w-[218px] h-[56px] border-[1px] border-gray-500 font-semibold text-[16px] leading-[24px] rounded-[4px]'>Update Cart</button>
                </div>
                <div className='flex flex-row items-start justify-between mt-[80px]'>
                    <div className='flex flex-row items-center gap-[16px]'>
                        <input type="text" placeholder='Enter Coupon Code' className='w-[300px] px-2 h-[56px] outline-none border-[1px] rounded-[4px] '/>
                        <button className='bg-[#DB4444] w-[211px] h-[56px] rounded-[4px] '>Appy Coupon</button>
                    </div>
                    <div className='flex flex-col   w-[470px] py-[32px] px-[24px] h-[324px]  border-black rounded-[4px] border-2 '>
                    <h1 className='font-semibold text-[20px] leading-[28px]'>Cart</h1>
                    <div>
                    <div className='flex justify-between border-b-[2px] border-gray-500 py-[16px]'>
                        <p className=''>SubTotal:</p>
                        <p className='Shipping'>$1750</p>
                    </div>
                    <div className='flex justify-between border-b-[2px] border-gray-500 py-[16px]'>
                        <p className=''>Shipping:</p>
                        <p className='Shipping'>Free</p>
                    </div>
                    <div className='flex justify-between border-b-[2px] border-gray-500 py-[16px]'>
                        <p className=''>Total:</p>
                        <p className='Shipping'>$1750</p>
                    </div>
                    
                    </div>
                    <div className='flex justify-center mt-[16px]'>
                        <Link href='/checkout'>
                    <button className='bg-[#DB4444] w-[260px] h-[56px] rounded-[4px]'>Process To Checkout</button>
                    </Link>
                    </div>
                    </div>
                </div>
                
    </div>
}
export default Cart;
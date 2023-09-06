import Image from "next/image"
import React from "react"
const Checkout = () => {
    return <div className="mt-[80px] mb-[140px] px-[135px]  flex flex-row items-center justify-between">
            <div>
                <h1 className="font-semibold text-[36px] leading-[30px]">Billing Details</h1>
                    <div className="flex flex-col gap-[32px] mt-[48px]">
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="">First Name <span className="text-[#DB4444]">*</span> </label>
                            <input type="text" className="w-[470px] px-5 h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none"/>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="">Company Name <span className="text-[#DB4444]">*</span> </label>
                            <input type="text" className="w-[470px] px-5 h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none"/>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="">Street Address <span className="text-[#DB4444]">*</span> </label>
                            <input type="text" className="w-[470px] px-5 h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none"/>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="">Apartment, floor, etc. (optional) <span className="text-[#DB4444]">*</span> </label>
                            <input type="text" className="w-[470px] px-5 h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none"/>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="">Phone Number<span className="text-[#DB4444]">*</span> </label>
                            <input type="text" className="w-[470px] px-5 h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none"/>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="">Email Address<span className="text-[#DB4444]">*</span> </label>
                            <input type="text" className="w-[470px] px-5 h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none"/>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="">Town/City<span className="text-[#DB4444]">*</span> </label>
                            <input type="text" className="w-[470px] px-5 h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none"/>
                        </div>
                        <div className="flex flex-row items-center gap-[16px]">
                            <input  type="checkbox" className="bg-[#DB4444] accent-[#DB4444] w-[24px] h-[24px]  rounded-[4px] outline-none"/>
                            <h1 className="text-[16px] font-normal leading-[24px] ">Save this information for faster check-out next time</h1>
                        </div>
                    </div>
            </div>
            <div className="">      
                <div className="w-[425px]">
                        <div className="flex flex-row items-center justify-between w-full">
                                <div className="flex flex-row items-center gap-[24px]">
                                <Image alt="" src = '/Monitor-Cart-Small.png' width={54} height={54}/>
                                <p className="text-[16px] font-normal leading-[24px]">LCD Monitor</p>
                                </div>
                            
                            <p>$650</p>
                        </div>

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
                </div>
                <div className="mt-[34px] flex flex-col gap-[32px]">
                    <div className="flex flex-row items-center justify-between ">
                        <div className="flex flex-row items-center gap-[16px]">
                    <input type="radio" className="accent-black w-[24px] h-[24px]"/>
                    <p>Bank</p>
                    </div>
                    <Image alt = '' src='/Frame 834 (1).png' width={192} height={28}/> 
                    </div>
                    <div className="flex flex-row items-center gap-[16px]">
                    <input type="radio" className="accent-black w-[24px] h-[24px]"/>
                    <p>Cash On Delivery</p>
                    </div>
                    <div className='flex flex-row items-center gap-[16px]'>
                        <input type="text" placeholder='Enter Coupon Code' className='w-[300px] px-2 h-[56px] outline-none border-[1px] rounded-[4px] '/>
                        <button className='bg-[#DB4444] w-[211px] h-[56px] rounded-[4px] '>Appy Coupon</button>
                    </div>
                    <button className='bg-[#DB4444] w-[211px] h-[56px] rounded-[4px] '>Appy Coupon</button>
                </div>
            </div>

    </div>
}
export default Checkout
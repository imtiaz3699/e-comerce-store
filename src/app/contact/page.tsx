import React from "react";
import Image from "next/image";
const Contact = () => {
        return <div className="pt-[80px] px-[135px] pb-[140px] flex flex-row items-center gap-[30px]">
                <div className="w-[340px] h-[457px]  dropshadow-xl shadow-xl px-[35px] py-[40px]">
                    <div className="flex flex-row items-center gap-[16px]">
                        <div className="w-[40px] h-[40px] bg-[#DB4444] rounded-full flex flex-row items-center justify-center">
                            <Image alt='' src = '/VectorfdASFAS.png' width = {20} height = {20}/>
                            
                        </div>
                        <h1 className="font-semibold text-[16px] leading-[24px]">Call To Us</h1>
                    </div>
                    <p className=" text-[14px] font-normal leading-[21px] mt-[24px]">We are available 24/7, 7 days a week.</p>
                    <p className="text-[14px] font-normal leading-[21px] mt-[16px] border-b-[1px] border-b-gray-400 pb-[32px]">Phone: +8801611112222</p>
                    <div className="pt-[32px] ">
                    <div className="flex flex-row items-center gap-[16px]">
                        <div className="w-[40px] h-[40px] bg-[#DB4444] rounded-full flex flex-row items-center justify-center">
                            <Image alt='' src = '/Vectordfasfasd.png' width = {20} height = {20}/>
                            
                        </div>
                        <h1 className="font-semibold text-[16px] leading-[24px]">Write To Us</h1>
                    </div>
                    <p className="max-w-[262px] text-[14px] font-normal text-black leading-[21px] mt-[24px]">We are available 24/7, 7 days a week.</p>
                    <p className="max-w-[262px] text-[14px] font-normal leading-[21px] mt-[16px]">Emails: customer@exclusive.com</p>
                    <p className="max-w-[262px] text-[14px] font-normal leading-[21px] mt-[16px]">Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className="w-[800px] px-[32px]  dropshadow-xl shadow-xl flex flex-col items-end justify-end gap-[32px] py-[40px]">
                    <div className="flex flex-row items-center justify-between w-full">
                        <input type="text" placeholder="Your Name" className="outline-none bg-[#F5F5F5] rounded-[4px] w-[235px] h-[50px] py-[13px] px-[16px]"/>
                        <input type="text" placeholder="Your Email" className="outline-none bg-[#F5F5F5] rounded-[4px] w-[235px] h-[50px] py-[13px] px-[16px]"/>
                        <input type="text" placeholder="Your Phone" className="outline-none bg-[#F5F5F5] rounded-[4px] w-[235px] h-[50px] py-[13px] px-[16px]"/>
                    </div>
                    <textarea name="" className="outline-none bg-[#F5F5F5] w-[737px] h-[207px] py-5 px-5 rounded-[4px]" id="" placeholder="Enter Your Message " cols={30} rows={10}></textarea>
                    <button className="bg-[#DB4444] w-[215px] h-[56px] rounded-[4px] text-white">Send Message</button>
                </div>
        </div>
}
export default Contact;
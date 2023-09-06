'use client'
import Image from "next/image";

const Signup = () => {
        return <div className='bg-white pr-[120px] pt-[60px] pb-[140px] flex flex-row items-center gap-[129px]'>
                    <div className="w-[805px] h-[781px] relative">
                        <Image alt="" src = '/Side Image.png' layout="fill" objectFit="cover"/>
                    </div>
                    <div className="flex flex-col gap-[40px]">
                        <div className="flex flex-col gap-[24px]">
                        <h1 className="font-normal text-[36px] leading-[30px]">Create an account</h1>
                        <p>Enter your details below</p>
                        </div>
                        <div className="flex flex-col gap-[40px]">
                            <input type="text" placeholder="Name" className="border-b-[1px] border-gray-400 outline-none"/>
                            <input type="text" placeholder="Name or Phone number" className="border-b-[1px] border-gray-400 outline-none"/>
                            <input type="text" placeholder="Password" className="border-b-[1px] border-gray-400 outline-none"/>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <button className="w-[371px] h-[56px] bg-[#DB4444] rounded-[4px] ">Create Account</button>
                            <button className="w-[371px] h-[56px] rounded-[4px] border-[1px] border-gray-400">Sign up with Google</button>
                        </div>
                        <div className="w-[371px] h-[56px] flex flex-row items-center justify-center"><span>Already have account? </span> <strong> Login</strong> </div>

                    </div>
        </div>    
}
export default Signup;
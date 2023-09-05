'use client'
import React from 'react';
type Props = {
    text?:string
  }
export const SectionHeading: React.FC<Props> = ({text}) => {
    return <div className="flex flex-row items-center gap-[16px]">
    <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
   <h1 className="text-[#DB4444] font-semibold text-[16px] leading-[20px]">{text}</h1>
</div>
}
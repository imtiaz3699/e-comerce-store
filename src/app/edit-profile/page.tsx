import React from 'react'
const EditProfile = () => {

   const data = [
    {
        names:'Manage My Account',
        names2: [
            {
                name:'My Profile',
                url:'',
            },
            {
                name:'Address Book',
                url:'',
            },
            {
                name:'My Payment Options',
                url:'',
            },
        ]
    },
    {
        names:'My Orders',
        names2: [
            {
                name:'My Returns',
                url:'',
            },
            {
                name:'My Cancellations',
                url:'',
            },
        ]
    },
    {
        names:'Wish List',
    }


   ] 
        return <div className='px-[135px] mt-[80px] pb-[140px] flex flex-row justify-between'>
            <div className='flex flex-col '>
          {
            data.map((element,idx)=> {
                return <div key={idx} className='flex flex-col gap-[16px]'>
                <h1 className='text-[16px] leading-[24px] mt-[24px] font-semibold'>{element.names}</h1>
                <div className='flex flex-col gap-[8px] ml-5 '>
                {
                    element.names2?.map((element,index) => {
                        return <p key={index} className='text-gray-500 cursor-pointer hover:text-[#DB4444]'>{element.name}</p>
                    })
                } 
                </div>
                
            </div>
            })
          }  
          </div>
            <div className='w-[870px] h-[630px] shadow-xl px-[80px] py-[40px]'>
                <h1 className='text-[#DB4444] text-[20px]  leading-[28px] font-semibold'>Edit Your Profile</h1>
                <div className='flex flex-col gap-[24px] mt-[16px]'>

                <div className='flex flex-row items-center gap-[50px]'>
                <div className='flex flex-col gap-[8px]'>
                    <div className='text-[16px] font-normal leading-[24px] '>First name</div>
                    <input type="text" className='w-[330px] h-[50px] px-3 bg-[#F5F5F5] outline-none rounded-[4px]' />
                </div>
                
                <div className='flex flex-col gap-[8px]'>
                    <div className='text-[16px] font-normal leading-[24px] '>Last name</div>
                    <input type="text" className='w-[330px] h-[50px] px-3 bg-[#F5F5F5] outline-none rounded-[4px]' />
                </div>

                </div>

                <div className='flex flex-row items-center gap-[50px]'>
                <div className='flex flex-col gap-[8px]'>
                    <div className='text-[16px] font-normal leading-[24px] '>Email Address</div>
                    <input type="text" className='w-[330px] h-[50px] px-3 bg-[#F5F5F5] outline-none rounded-[4px]' />
                </div>
                
                <div className='flex flex-col gap-[8px]'>
                    <div className='text-[16px] font-normal leading-[24px] '>Address</div>
                    <input type="text" className='w-[330px] h-[50px] px-3 bg-[#F5F5F5] outline-none rounded-[4px]' />
                </div>

                </div>

                <div className='flex flex-col gap-[16px]'>
                        <h1 className='text-black text-[20px]  leading-[28px] font-semibold'>Password Changes</h1>
                        <input type="text" placeholder='Current Passwod' className='w-full h-[50px] px-3 bg-[#F5F5F5] outline-none rounded-[4px]'/>
                        <input type="text" placeholder='New Passwod' className='w-full h-[50px] px-3 bg-[#F5F5F5] outline-none rounded-[4px]'/>
                        <input type="text" placeholder='Confirm New Passwod' className='w-full h-[50px] px-3 bg-[#F5F5F5] outline-none rounded-[4px]'/>
                </div>
                </div>
                <div className='flex flex-row items-center justify-end gap-[32px] mt-[24px]'>
                    <h1>Cancel</h1>
                    <button className='w-[214px] h-[56px] bg-[#DB4444] rounded-[4px] text-white'>Save Changes</button>
                </div>
            </div>
        </div>
} 
export default EditProfile;
import React from 'react'
import { LuCircleCheck } from 'react-icons/lu'

function Contact() {
  return (
    <div className=' flex justify-center items-center my-padding-container-3 h-auto md:h-auto' id='contact'>
        <div className='@container w-[100%] lg:w-[95%]'>
            <div className='flex flex-col justify-between items-center gap-40 lg:flex-row lg:gap-40'>
                <div className='flex flex-col items-center'>
                    <div className='h-[250px] flex flex-col justify-between w-full px-[20px] py-[30px] bg-[#000000] lg:rounded-t-xl lg:overflow-hidden my-padding-container-2'>
                        <div>
                            <button className='rounded-sm bg-accent my-padding-container-1 font-medium text-[12px] text-white'>
                                CONTACT US
                            </button>
                        </div>

                        <div className='w-[95%] md:w-[80%] lg:w-[90%]'>
                            <h2 className='text-[#ffffff] text-[40px] w-[100%] font-700 leading-[48px] md:w-[80%] lg:w-[90%]'>
                                The design & dev agency you&lsquo;ve been looking for.
                            </h2>
                        </div>
                    </div>

                    <div className='h-[450px] flex flex-col gap-[50px] w-full px-[20px] py-[30px] bg-accent/10 lg:rounded-b-xl lg:overflow-hidden my-padding-container-2'>
                        <div>
                            <p className='text-[#000000]/70 text-[20px] font-400 leading-[26px] w-[100%] md:w-[70%] lg:w-[70%]'>
                                Ready to elevate your online presence? Drop us a message below, and let&lsquo;s start a conversation about your website
                            </p>
                        </div>

                        <div>
                            <h2 className='text-[#000000] text-[20px] font-700 leading-[26px]'>
                                Let&apos;s chat: +234 80 8574 4745
                            </h2>
                        </div>

                        <div className='flex flex-col w-[100%] gap-20 text-[#000000] lg:w-[100%]'>
                            <h3 className='text-[#000000] text-[24px] w-[70%] font-700 leading-[30px]'>
                                Your benefits: <br />
                            </h3>

                            <div className='grid grid-cols-2 gap-20 w-full md:grid-cols-2 lg:grid-cols-2 lg:w-[100%]'>
                                <div className='flex gap-10 items-center'>
                                    <LuCircleCheck className='text-[30px]' />
                                    <p className='text-[#000000] text-[16px] font-400 leading-[22px]'>
                                        Professional design
                                    </p>
                                </div>

                                <div className='flex gap-10 items-center'>
                                    <LuCircleCheck className='text-[30px]' />
                                    <p className='text-[#000000] text-[16px] font-400 leading-[22px]'>
                                        Responsive design
                                    </p>
                                </div>

                                <div className='flex gap-10 items-center'>
                                    <LuCircleCheck className='text-[30px]' />
                                    <p className='text-[#000000] text-[16px] font-400 leading-[22px]'>
                                        Fast loading
                                    </p>
                                </div>

                                <div className='flex gap-10 items-center'>
                                    <LuCircleCheck className='text-[30px]' />
                                    <p className='text-[#000000] text-[16px] font-400 leading-[22px]'>
                                        SEO optimized
                                    </p>
                                </div>

                                <div className='flex gap-10 items-center'>
                                    <LuCircleCheck className='text-[30px]' />
                                    <p className='text-[#000000] text-[16px] font-400 leading-[22px]'>
                                        Easy to manage & update
                                    </p>
                                </div>

                                <div className='flex gap-10 items-center'>
                                    <LuCircleCheck className='text-[30px]' />
                                    <p className='text-[#000000] text-[16px] font-400 leading-[22px]'>
                                        Transparent
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className='flex justify-center items-center rounded-xs gap-10'>
                    <div className='flex flex-col items-center gap-30 w-full'>
                        <div className='flex flex-col items-center gap-10 '>
                            <h2 className='text-[#df3e0d] text-[20px] font-600 leading-[26px] text-center'>
                            Become a Client
                            </h2>

                            <div className='flex gap-4 items-center p-10'>
                                <span className='border-b-2 w-full'></span>
                                {/* <span><BiAnchor className='text-[20px]' /></span> */}
                                <span className='border-b-2 w-full'></span>
                            </div>
                        </div>

                        <form className='flex flex-col justify-start items-start gap-[20px] px-[20px] py-[20px] bg-[#eeeeee] rounded-xs my-padding-container-4'>
                            <div className='flex flex-col items-center gap-4 md:flex-row'>
                                <div>
                                    <label htmlFor='name'>First Name</label>
                                    <input 
                                        type='text' 
                                        id='firstName' 
                                        name='firstName'
                                        placeholder='First Name'
                                        className='w-full my-padding-form-1 my-margin-form-1 border-2 border-[#000000] rounded-xs'
                                    />
                                </div>

                                <div>
                                    <label htmlFor='lastName'>Last Name</label>
                                    <input 
                                        type='text' 
                                        id='lastName' 
                                        name='lastName'
                                        placeholder='Last Name'
                                        className='w-[100%] my-padding-form-1 my-margin-form-1 border-2 border-[#000000] rounded-xs'
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor='email'>Company Email</label>
                                <input 
                                    type='email' 
                                    id='email' 
                                    name='email'
                                    placeholder='Email'
                                    className='w-full my-padding-form-1 my-margin-form-1 border-2 border-[#000000] rounded-xs'
                                />
                            </div>

                            <div>
                                <label htmlFor='findus'>How did you find Culmerin Technologies?</label>
                                <select 
                                    id='findus' 
                                    name='findus'
                                    className='w-full my-padding-form-1 my-margin-form-1 border-2 border-[#000000] rounded-xs'
                                >
                                    <option defaultValue=''>Select an option</option>
                                    <option value=''>Google</option>
                                    <option value=''>Facebook</option>
                                    <option value=''>Instagram</option>
                                    <option value=''>Twitter</option>
                                    <option value=''>LinkedIn</option>
                                    <option value=''>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor='findus'>What project are you working on?</label>
                                <select 
                                    id='projectType' 
                                    name='projectType'
                                    className='w-full my-padding-form-1 my-margin-form-1 border-2 border-[#000000] rounded-xs'
                                >
                                    <option defaultValue=''>Select an option</option>
                                    <option value=''>Web Development</option>
                                    <option value=''>Mobile Development</option>
                                    <option value=''>Web & Mobile Development</option>
                                    <option value=''>UI/UX Design</option>
                                    <option value=''>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor='projectDetails'>Project Details</label>
                                <textarea 
                                    id='projectDetails' 
                                    name='projectDetails'
                                    placeholder='To better assist you, please descibe how we can help you...'
                                    className='w-full my-padding-form-1 my-margin-form-1 border-2 border-[#000000] rounded-xs'
                                />
                            </div>

                            <div>
                                <button className='rounded-xs bg-accent px-[15px] py-[10px] font-medium text-[14px] text-white'>
                                    Send a message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Contact
import React from 'react'
import { BiAnchor, BiArrowBack, BiTerminal } from 'react-icons/bi'

function Contact() {
  return (
    <div className='bg-accen flex justify-center items-center h-auto md:h-[100v] ' id='contact'>
        <div className='container mx-auto px-[0px] md:px-[50px]'>
            <div className='flex flex-col items-center'>
                <div className='h-[250px] flex flex-col justify-between w-full px-[20px] py-[30px] bg-[#000000] rounded-t-xl overflow-hidden'>
                    <div>
                        <button className='rounded-sm bg-accent px-[15px] py-[5px] font-medium text-[12px] text-white'>
                            CONTACT US
                        </button>
                    </div>

                    <div className='w-[70%]'>
                        <h2 className='text-[#ffffff] text-[40px] w-[70%] font-700 leading-[48px]'>
                            The design & dev agency you&lsquo;ve been looking for.
                        </h2>
                    </div>
                </div>
                <div className='h-[350px] flex flex-col justify-between w-full px-[20px] py-[30px] bg-accent/10 rounded-b-xl overflow-hidden'>
                    <div>
                        <p className='text-[#ffffff] text-[20px] font-400 leading-[24px]'>
                            Ready to elevate your online presence? Drop us a message below, and let&lsquo;s start a conversation about your website
                        </p>
                    </div>

                    <div>
                        <h3 className='text-[#ffffff] text-[20px] font-600 leading-[26px]'>
                            Let's chat: +234 80 8574 4745
                        </h3>
                    </div>

                    <div className='w-[70%]'>
                        <h2 className='text-[#ffffff] text-[40px] w-[70%] font-700 leading-[48px]'>
                            Your benefits: <br />
                        </h2>

                        <div className='flex flex-wrap gap-10'>
                            <div className='flex gap-4 items-center'>
                                <BiAnchor className='text-[30px]' />
                                <p className='text-[#ffffff] text-[20px] font-400 leading-[24px]'>
                                    Professional & responsive design
                                </p>
                            </div>

                            <div className='flex gap-4 items-center'>
                                <BiArrowBack className='text-[30px]' />
                                <p className='text-[#ffffff] text-[20px] font-400 leading-[24px]'>
                                    Fast loading & SEO optimized
                                </p>
                            </div>

                            <div className='flex gap-4 items-center'>
                                <BiTerminal className='text-[30px]' />
                                <p className='text-[#ffffff] text-[20px] font-400 leading-[24px]'>
                                    Easy to manage & update
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className='flex justify-between items-center rounded-xs'>
                <div>
                    <h2 className='text-[#df3e0d] text-[60px] font-600 leading-[66px]'>
                    Become a Client
                    </h2>

                    {/* <div className='flex gap-4 items-center p-10'>
                        <span className='border-b-2 w-full'></span>
                        <span><BiAnchor className='text-[20px]' /></span>
                        <span className='border-b-2 w-full'></span>
                    </div> */}

                    <form className='flex justify-center items-center px-[20px] py-[20px] bg-[#eeeeee] rounded-xs'>
                        <div className='flex items-center gap-4 md:flex-col'>
                            <div>
                                <label htmlFor='name'>First Name</label>
                                <input 
                                    type='text' 
                                    id='firstName' 
                                    name='firstName'
                                    placeholder='First Name'
                                    className='w-full'
                                />
                            </div>

                            <div>
                                <label htmlFor='lastName'>Last Name</label>
                                <input 
                                    type='text' 
                                    id='lastName' 
                                    name='lastName'
                                    placeholder='Last Name'
                                    className='w-full'
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
                                className='w-full'
                            />
                        </div>

                        <div>
                            <label htmlFor='findus'>How did you find Culmerin Technologies?</label>
                            <select 
                                id='findus' 
                                name='findus'
                                className='w-full'
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
                                className='w-full'
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
                                className='w-full'
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
  )
}

export default Contact
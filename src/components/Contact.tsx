import React from 'react'

function Contact() {
  return (
    <div className='flex justify-center items-center h-auto md:h-[100vh] '>
        <div className='container mx-auto px-[0px] md:px-[50px]'>
            <div className='flex items-center rounded-md'>
                <div className='h-[400px] flex flex-col justify-between px-[20px] py-[30px] bg-[#000000] rounded-xs '>
                    <div>
                        <button className='rounded-xs bg-accent px-[15px] py-[5px] font-medium text-[12px] text-white'>
                            CONTACT US
                        </button>
                    </div>

                    <div>
                        <h2 className='text-[#ffffff] text-[60px] w-[50%] font-600 leading-[66px]'>
                            The design & dev agency you&lsquo;ve been looking for.
                        </h2>
                    </div>
                </div>
                <div className='h-[500px] bg-[#eeeeee] rounded-xs '>

                </div>

            </div>

            {/* Form */}
            <div className='flex justify-between items-center rounded-xs'>
                <div>
                    <h2 className='text-[#df3e0d]/10 text-[60px] font-600 leading-[66px]'>
                    Become a Client
                    </h2>

                    <div className=''>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <form className='flex flex-col gap-4 px-[20px] py-[20px] bg-[#eeeeee] rounded-xs'>
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
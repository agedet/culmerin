'use client'

import { LucideCircleCheck } from 'lucide-react'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { useContactLogic } from './useContactLogic'

function Contact() {
    const {
        loading,
        error,
        formData,
        handleInputChange, 
        handleProjectSelectChange, 
        handleChannelSelectChange,
        handleSubmit
    } = useContactLogic();

  return (
    <div className='flex justify-center items-center h-full' id='contact'>
        <div className='w-full lg:container lg:max-w-[95%]'>
            <div className='flex flex-col justify-between items-center gap-10 lg:flex-row lg:gap-10'>
                <div className='flex flex-col items-center lg:w-[60%]'>
                    <div className='h-[250px] flex flex-col justify-between w-full px-[20px] py-[30px] bg-[#000000] lg:rounded-t-xl lg:overflow-hidden my-padding-container-2'>
                        <div>
                            <button className='rounded-[4px] bg-primary px-[22px] py-[13px] font-semibold text-[10px] leading-[17px] text-white'>
                                CONTACT US
                            </button>
                        </div>

                        <div className='w-[95%] md:w-[80%] lg:w-[90%]'>
                            <h2 className='text-[#ffffff] text-[34px] leading-[44px] lg:text-[40px] w-[100%] font-700 lg:leading-[48px] md:w-[90%] lg:w-[95%]'>
                                The design & dev agency you&lsquo;ve been looking for.
                            </h2>
                        </div>
                    </div>

                    <div className='h-[450px] flex flex-col gap-10 w-full px-[20px] py-[30px] bg-secondary lg:rounded-b-xl lg:overflow-hidden'>
                        <div>
                            <p className='text-[#000000]/70 text-[17px] leading-[22px] lg:text-[19px] font-400 lg:leading-[23px] w-[100%] md:w-[70%] lg:w-[70%]'>
                                Ready to elevate your online presence? Drop us a message below, and let&lsquo;s start a conversation about your website
                            </p>
                        </div>

                        <div>
                            <h2 className='text-[#000000] text-[16px] leading-[21px] lg:text-[20px] font-700 lg:leading-[26px]'>
                                Let&apos;s chat: +234 80 8574 4745
                            </h2>
                        </div>

                        <div className='flex flex-col w-[100%] gap-8 text-[#000000] lg:w-[100%]'>
                            <h3 className='text-[#000000] text-[16px] leading-[21px] lg:text-[20px] w-[70%] font-700 lg:leading-[26px]'>
                                Your benefits: <br />
                            </h3>

                            <div className='grid grid-cols-2 gap-2 w-full md:grid-cols-2 lg:grid-cols-2 lg:w-[100%]'>
                                <div className='flex gap-2 items-center'>
                                    <LucideCircleCheck className='text-[18px] lg:text-[18px] text-primary' />
                                    <p className='text-[#000000] text-[16px] leading-[24px] lg:text-[16px] font-400 lg:leading-[22px]'>
                                        Professional design
                                    </p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <LucideCircleCheck className='text-[18px] lg:text-[18px] text-primary' />
                                    <p className='text-[#000000] text-[16px] leading-[24px] lg:text-[16px] font-400 lg:leading-[22px]'>
                                        Responsive design
                                    </p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <LucideCircleCheck className='text-[18px] lg:text-[18px] text-primary' />
                                    <p className='text-[#000000] text-[16px] leading-[24px] lg:text-[16px] font-400 lg:leading-[22px]'>
                                        Fast loading
                                    </p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <LucideCircleCheck className='text-[18px] lg:text-[18px] text-primary' />
                                    <p className='text-[#000000] text-[16px] leading-[24px] lg:text-[16px] font-400 lg:leading-[22px]'>
                                        SEO optimized
                                    </p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <LucideCircleCheck className='text-[18px] lg:text-[18px] text-primary' />
                                    <p className='text-[#000000] text-[16px] leading-[24px] lg:text-[16px] font-400 lg:leading-[22px]'>
                                        Easy to manage & update
                                    </p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <LucideCircleCheck className='text-[18px] lg:text-[18px] text-primary' />
                                    <p className='text-[#000000] text-[16px] leading-[24px] lg:text-[16px] font-400 lg:leading-[22px]'>
                                        Transparent
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className='w-full rounded-[4px] lg:w-[40%]'>
                    <div className='flex flex-col items-center gap-4 w-full'>
                        <div className='flex flex-col items-center gap-4 '>
                            <h2 className='text-[#df3e0d] text-[16px] font-600 leading-[21px] text-center'>
                            Become a Client
                            </h2>

                            {error && (
                                <p className="text-red-500 text-center mb-2 font-medium">
                                    {error}
                                </p>
                            )}

                            <div className='flex items-center'>
                                <span className='border-b-2 w-full'></span>
                                {/* <span><BiAnchor className='text-[20px]' /></span> */}
                                <span className='border-b-2 w-full'></span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className='w-full grid gap-2 px-[20px] py-[20px] bg-white rounded-[4px]'>
                            <div className='w-full flex flex-row lg:flex-col items-center gap-4'>
                                <div className='w-full'>
                                    <Label htmlFor='firstName'>First Name</Label>
                                    <Input 
                                        type='text' 
                                        id='firstName' 
                                        name='firstName'
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                                        placeholder='Enter First Name'
                                    />
                                </div>

                                <div className='w-full'>
                                    <Label htmlFor='lastName'>Last Name</Label>
                                    <Input 
                                        type='text' 
                                        id='lastName' 
                                        name='lastName'
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                                        placeholder='Enter Last Name'
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor='email'>Email</Label>
                                <Input 
                                    type='email' 
                                    id='email' 
                                    name='email'
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    placeholder='Enter email address'
                                    className='w-full'
                                />
                            </div>

                            <div>
                                <Label>
                                    How did you find Culmerin Technologies?
                                </Label>
                                
                                <Select onValueChange={handleChannelSelectChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value='google'>Google</SelectItem>
                                        <SelectItem value='facebook'>Facebook</SelectItem>
                                        <SelectItem value='instagram'>Instagram</SelectItem>
                                        <SelectItem value='twitter'>Twitter</SelectItem>
                                        <SelectItem value='linkedin'>LinkedIn</SelectItem>
                                        <SelectItem value='other'>Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label>What project are you working on?</Label>

                                <Select onValueChange={handleProjectSelectChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an project" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value='webdevelopment'>Web Development</SelectItem>
                                        <SelectItem value='mobiledevelopment'>Mobile Development</SelectItem>
                                        <SelectItem value='webandmobiledevelopment'>Web & Mobile Development</SelectItem>
                                        <SelectItem value='ui/ux'>UI/UX Design</SelectItem>
                                        <SelectItem value='other'>Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor='projectDetails'>Project Details</Label>
                                <Textarea 
                                    id='projectDetails' 
                                    name='projectDetails'
                                    value={formData.projectDetails}
                                    onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                                    placeholder='To better assist you, please describe how we can help you...'
                                />
                            </div>

                            <div className='mt-4'>
                                <Button
                                    type='submit' 
                                    className='rounded-[4px] bg-primary px-[22px] py-[13px] font-medium text-[14px] text-white disabled:bg-primary/50'
                                    disabled={loading}
                                >
                                    Send a message
                                </Button>
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
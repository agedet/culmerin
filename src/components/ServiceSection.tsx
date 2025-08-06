'use client'

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'
import { LucideActivity, LucideEdit, LucideWebhook } from 'lucide-react'

const services = [
    {
        id: 1,
        icon: <LucideWebhook />,
        service: 'Website',
        text: 'Good design is good for business. Invest in your user by having one of our experts map their journey and improve your site. Webflow, WordPress, Shopify, and more.',
        
    },
    {
        id: 2,
        icon: <LucideEdit />,
        service: 'App Development',
        text: 'From portals to products front-end to back-end, We ensure that your website functions flawlessly. Javascript, Nextjs, React, Nestjs and more',
    },
    {
        id: 3,
        icon: <LucideWebhook />,
        service: 'Mobile App',
        text: 'Custom iOS and Android apps, made for speed and solid uptime.',
        
    },
    {
        id: 4,
        icon: <LucideActivity />,
        service: 'Branding',
        text: 'Partner with us to build a brand that not only stands out but leaves a lasting impression in the hearts and minds of your customers.'
    },
    {
        id: 5,
        icon: <LucideEdit />,
        service: 'SEO optimization',
        text: 'Industry based SEO optimization for local and international ranking',
    },
    {
        id: 6,
        icon: <LucideActivity />,
        service: 'Get Quote',
        text: 'Got a Scope? Tell us what you need we&apos;ll scope it faster than you think.'
    },
]

function ServiceSection() {
  return (
    <section className='bg-primary/50 flex justify-center items-center h-full'>
        <div className='container grid gap-[48px] py-[80px] max-w-[95%] lg:max-w-[90%] mx-auto'>
            <div className='flex flex-col gap-[10px] items-center'>
                <h2 className='font-outfit rounded-[50px] border border-primary px-[22px] py-[13px] font-medium text-[17px] leading-[29px] text-text'>
                    Solutions We Provide
                </h2>

                <h2 className='font-bold text-[48px] '>
                    Culmerin does that too...
                </h2>

                <p className='text-[#872608]/80 font-normal text-[12px] leading-[21px] md:text-[17px] md:leading-[29px] lg:text-[18px] lg:leading-[31px] w-[40%] text-center'>
                    Everything here is designed and developed to help make a stronger presence
                </p>
            </div>
            <div className='flex justify-center items-center '>
                <div className='grid grid-cols-1 gap-[24px] sm:grid-cols-3  lg:grid-cols-3 w-[85%]'>
                    {services.map((item) => {
                        return (
                            <Card 
                                key={item.id} 
                                className=' bg-secondary border-0 rounded-md gap-4 text-start'
                            >
                                <CardHeader className='grid gap-6'>
                                    <span className='text-[50px] h-14 w-14 rounded-[4px] bg-white text-primary flex justify-center items-center'>
                                    {item.icon}
                                    </span>
                                        
                                    <CardTitle className='lg:text-[24px] '>
                                        {item.service}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className='h-auto'>
                                    <p className='text-[16px] text-start font-400 leading-[22px]'>
                                        {item.text}
                                    </p>
                                </CardContent>
                                <CardFooter className='flex justify-start items-start'>
                                    <Link href='' className='text-primary font-semibold text-[16px] leading-[22px]'>
                                        Learn More
                                    </Link>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default ServiceSection
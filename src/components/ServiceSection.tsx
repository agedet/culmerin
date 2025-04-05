'use client'

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'
import { LucideActivity, LucideEdit, LucideWebhook } from 'lucide-react'

const services = [
    {
        id: 1,
        icon: <LucideWebhook />,
        service: 'Web Design',
        text: 'Good design is good for business. Invest in your user by having one of our experts map their journey and improve your site.',
        
    },
    {
        id: 2,
        icon: <LucideEdit />,
        service: 'Web Development',
        text: 'From front-end to back-end, We ensure that your website functions flawlessly. Javascript, Nextjs, React, Webflow, WordPress, Shopify, and more.',
    },
    {
        id: 3,
        icon: <LucideActivity />,
        service: 'Branding',
        text: 'Partner with us to build a brand that not only stands out but leaves a lasting impression in the hearts and minds of your customers.'
    },
]

function ServiceSection() {
  return (
    <section className='bg-primary/50 flex justify-center items-center h-full lg:h-screen'>
        <div className='container py-[80px] max-w-[95%] lg:max-w-[90%] mx-auto'>
            <div className='mb-[40px]'>
                <h2 className='font-outfit text-[#000000] text-[36px] leading-[47px] md:text-[44px] md:leading-[48px] lg:text-[40px] lg:leading-[48px] font-bold w-full'>
                    Solutions
                </h2>
            </div>

            <div className='grid grid-cols-1 gap-8 justify-between sm:grid-cols-3  lg:grid-cols-3'>
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
        
    </section>
  )
}

export default ServiceSection
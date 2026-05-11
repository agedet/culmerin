'use client'

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { LucideActivity, LucideBot, LucideEdit, LucideSmartphone, LucideWebhook } from 'lucide-react'

const services = [
    {
        id: 1,
        icon: <LucideActivity />,
        service: 'Brand strategy and identity',
        text: 'Define your position, refine your message, and create a visual identity.'
    },
    {
        id: 2,
        icon: <LucideWebhook />,
        service: 'Sales & Marketing Website',
        text: 'Good design is good for business. Invest in your user by having one of our experts map their journey and improve your site. Webflow, WordPress, Shopify, and more.',
        
    },
    {
        id: 3,
        icon: <LucideBot />,
        service: 'AI automations.',
        text: 'Save time and reduce repetitive work by automating routine processes.'
    },
    {
        id: 4,
        icon: <LucideWebhook />,
        service: 'CRM integrations.',
        text: 'Set up systems so your sales and customer data live in one place. We work with Hubspot, Salesforce, Pipedrive, and more.'
    },
    {
        id: 5,
        icon: <LucideEdit />,
        service: 'Full-stack software engineering.',
        text: 'From portals to products front-end to back-end, We ensure that your website functions flawlessly. Javascript, Nextjs, React, Nestjs and more',
    },
    {
        id: 6,
        icon: <LucideSmartphone />,
        service: 'Mobile App',
        text: 'Custom iOS and Android apps, made for speed and solid uptime.',
        
    },
    {
        id: 7,
        icon: <LucideEdit />,
        service: 'SEO optimization',
        text: 'Industry based SEO optimization for local and international ranking',
    },    
]

function ServiceSection() {
  return (
    <section className='bg-primary/50 flex justify-center items-center h-full'>
        <div className='container grid gap-[48px] py-[80px] max-w-[95%] lg:max-w-[90%] mx-auto'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-40'>
                <div className='flex flex-col gap-[10px] items-start justify-center'>
                    <h2 className='font-outfit rounded-[50px] border border-primary px-[22px] py-[13px] font-medium text-[17px] leading-[29px] text-text text-center'>
                        Solutions We Provide
                    </h2>

                    <div className='flex flex-col gap-[10px] items-start'>
                        <h2 className='font-bold text-[32px] md:text-[48px]'>
                            Culmerin does that too...
                        </h2>

                        <p className='text-[#872608]/80 font-normal text-[15px] leading-[21px] md:text-[17px] md:leading-[29px] lg:text-[18px] lg:leading-[31px]'>
                            Brings branding, software engineering, AI automation, CRM integration, and sales marketing together into one practical growth system.
                        </p>

                        <p className='text-[#872608]/80 font-normal text-[15px] leading-[21px] md:text-[17px] md:leading-[29px] lg:text-[18px] lg:leading-[31px]'>
                            Everything here is designed and developed to help make a stronger presence. We help businesses move from scattered activity to structured execution. That means a clearer brand, better digital tools, faster workflows, and a stronger path from attention to revenue.
                        </p>

                        <div className='flex items-start mt-[20px]'>
                            <Link href='#contact' className='rounded-[50px] bg-primary px-[22px] py-[13px] font-medium text-[14px] leading-[21px] sm:text-[17px] sm:leading-[29px] text-white'>
                                Start Today
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8'>
                    {services.map((item) => (
                        <Card 
                            key={item.id} 
                            className=''
                        >
                            <CardHeader className='grid gap-6'>
                                <span className='text-[50px] h-14 w-14 rounded-full bg-[#000000]/20 text-[#000000] flex justify-center items-center'>
                                {item.icon}
                                </span>
                                    
                                <CardTitle className='lg:text-[24px] '>
                                    {item.service}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
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
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection
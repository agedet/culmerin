'use client'

import React from 'react'

const services = [
    {
        id: 1,
        service: 'Web Design',
        text: 'Good design is good for business. Invest in your user by having one of our experts map their journey and improve your site.',
        
    },
    {
        id: 2,
        service: 'Web Development',
        text: 'From front-end to back-end, We ensure that your website functions flawlessly. Javascript, Nextjs, React, Webflow, WordPress, Shopify, and more.',
    },
    {
        id: 3,
        service: 'Branding',
        text: 'Partner with us to build a brand that not only stands out but leaves a lasting impression in the hearts and minds of your customers.'
    },
]

function ServiceSection() {
  return (
    <section className='bg-accent/5 flex justify-center items-center my-padding-container-3 h-auto sm:h-auto md:h-auto lg:h-[80vh]'>
        <div className='@container w-[95%] lg:max-w-[95%] mx-auto'>
            <div className='grid grid-cols-1 gap-40 justify-between sm:grid-cols-3 lg:gap-40 lg:grid-cols-3'>
                {services.map((item) => {
                    return (
                        <div key={item.id} className=' bg-white rounded-md flex flex-col gap-20 text-center my-padding-container-2'>
                            <div className='flex gap-8 justify-start items-end'>
                                
                                

                                <p className='text-[20px] leading-[26px] text-end font-600'>
                                    {item.service}
                                </p>
                            </div>
                            <div>
                                <p className='text-[16px] text-start font-400 leading-[22px]'>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        
    </section>
  )
}

export default ServiceSection
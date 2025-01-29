'use client'

import React from 'react'
import CountUp from 'react-countup'

const stats = [
    {
        num: 3,
        task: 'Years',
        text: 'Designing & Developing'
    },
    {
        num: 15,
        task: 'Customers',
        text: 'Recommend Culmerin'
    },
    {
        num: 15,
        task: 'Projects',
        text: 'Successfully Completed'
    },
    {
        num: 25,
        task: 'Mins',
        text: 'Average Answer Time'
    },
]

function HeroStats() {
  return (
    <section className='flex justify-center items-center h-[60vh] md:h-[30vh]'>
        <div className='container mx-auto px-[20px] md:px-[50px]'>
            <div className='grid grid-cols-1 gap-10 mx-auto justify-between sm:grid-cols-2 md:gap-20 md:grid-cols-4'>
                {stats.map((item, index) => {
                    return (
                        <div key={index} className='border-l-4 border-accent/10 flex flex-col gap-6 text-center p-10 '>
                            <div className='flex gap-8 justify-start items-end'>
                                <CountUp 
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />

                                <p className='text-[20px] leading-[26px] text-end font-600'>
                                    {item.task}
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

export default HeroStats
'use client'

import React from 'react'
import CountUp from 'react-countup'

const stats = [
    {
        num: 5,
        task: 'Years',
        text: 'Designing & Developing'
    },
    {
        num: 97,
        task: 'Customers',
        text: 'Recommend Culmerin'
    },
    {
        num: 24,
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
    <section className='flex justify-center items-center h-auto md:h-[40vh]'>
        <div className='container mx-auto'>
            <div className='flex flex-wrap gap-10 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((item, index) => {
                    return (
                        <div key={index} className=''>
                            <div className='flex gap-4'>
                                <CountUp 
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />

                                <p>{item.task}</p>
                            </div>
                            <p>{item.text}</p>

                        </div>
                    )
                })}
            </div>
        </div>
        
    </section>
  )
}

export default HeroStats
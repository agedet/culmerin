import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <div className='flex justify-center items-center h-auto lg:h-[100vh]'>
      <main className='@container w-[95%] lg:w-[95%]'>
        <div className='flex flex-col justify-between items-center gap-40 border-b-3 border-b-accent/5 rounded-xs lg:flex-row lg:gap-10'>
          <div className='flex flex-col gap-20 pr-[20px] w-full lg:w-[50%]'>
            <h2 className='font-family text-[#000000] text-[60px] font-700 leading-[66px] w-full lg:w-[80%]'>
              Stronger presence for a better future
            </h2>

            <p className='text-[#872608]/80 font-500 text-[30px] leading-[42px] w-full lg:w-[80%]'>
              We manage your digital presence, so you can manage your buisness
            </p>

            <div className='flex gap-8 mt-[40px] mb-[40px]'>
              <button className='rounded-xs bg-accent px-[30px] font-medium text-[14px] text-white'>
                Get a quote
              </button>

              <button className='rounded-xs bg-accent/5 px-[15px] py-[10px] font-medium text-[14px] text-accent'>
                Book a Consultation
              </button>
            </div>

          </div>

          <div className='w-full lg:w-[50%]'>
            <Image 
              src='/jobshots_so.png'
              alt='Hero Image'
              className='rotate-x-20 -rotate-y-20 skew-y-5'
              width={900}
              height={1000}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection
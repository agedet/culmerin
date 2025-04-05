import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function HeroSection() {
  return (
    <section className='flex justify-center items-center lg:h-screen'>
      <main className='container mx-auto pt-[50px] max-w-[95%] lg:max-w-[90%]'>
        <div className='flex flex-col justify-between items-center gap-10 border-b-3 border-b-primary/5 rounded-[4px] lg:flex-row lg:gap-10'>
          <div className='grid gap-2 w-full lg:w-[50%]'>
            <h2 className='font-family text-[#000000] text-[32px] leading-[38px] md:text-[44px] md:leading-[48px] lg:text-[60px] font-700 lg:leading-[66px] w-full'>
              Stronger presence for a better future
            </h2>

            <p className='text-[#872608]/80 mt-[20px] font-500 text-[16px] leading-[22px] md:text-[20px] md:leading-[28px] lg:text-[30px] lg:leading-[42px] w-full'>
              We manage your digital presence, so you can manage your buisness
            </p>

            <div className='flex gap-4 mt-[40px] mb-[40px]'>
              <Link href='#contact' className='rounded-[4px] bg-primary px-[22px] py-[13px] font-semibold text-[14px] text-white'>
                Get a quote
              </Link>

              <Link href='#contact' className='rounded-[4px] bg-primary/5 px-[22px] py-[13px] font-semibold text-[14px] text-primary'>
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className='w-full flex justify-center lg:w-[50%]'>
            <Image 
              src='/jobshots_so.png'
              alt='Hero Image'
              width={500}
              height={100}
              className='w-3/4 lg:w-[100%]'
            />
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroSection
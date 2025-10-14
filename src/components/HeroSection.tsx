import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function HeroSection() {
  return (
    <section className='flex justify-center items-center lg:h-screen'>
      <main className='container mx-auto pt-[50px] max-w-[95%] lg:max-w-[90%]'>
        <div className='flex flex-col justify-between items-center gap-10 border-b-3 border-b-primary/5 rounded-[4px] lg:flex-row lg:gap-20'>
          <div className='grid gap-2 w-full lg:w-[50%]'>
            <h2 className='font-family text-[#000000]  text-[32px] leading-[38px] md:text-[44px] md:leading-[48px] lg:text-[75px] font-medium lg:leading-[85px] w-full'>
              Stronger presence for a better future
            </h2>

            <p className='text-[#872608]/80 mt-[20px] font-normal text-[14px] leading-[21px] md:text-[17px] md:leading-[29px] lg:text-[18px] lg:leading-[31px] w-full'>
              We manage your digital presence, so you can manage your buisness.
            </p>

            <div className='flex gap-2 mt-[40px] mb-[40px]'>
              <Link href='#contact' className='rounded-[50px] bg-primary px-[22px] py-[13px] font-medium text-[14px] leading-[21px] sm:text-[17px] sm:leading-[29px] text-white '>
                Start Today
              </Link>

              <Link href='#contact' className='rounded-[50px] border border-primary px-[22px] py-[13px] font-medium text-[14px] leading-[21px] sm:text-[17px] sm:leading-[29px] text-primary'>
                Get a Consultation
              </Link>
            </div>
          </div>

          <div className='w-full flex justify-center lg:w-[50%]'>
            <Image 
              src='/jobshots_so.png'
              alt='Hero Image'
              width={500}
              height={100}
              className='w-5/6 lg:w-[100%]'
            />
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroSection
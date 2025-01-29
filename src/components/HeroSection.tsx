import React from 'react'

function HeroSection() {
  return (
    <div className='flex justify-center items-center h-auto md:h-[100vh] '>
      <main className='container mx-auto px-[20px] md:px-[50px] md:py-[100px]'>
        <div className='flex justify-between items-center gap-8 border-y-1 border-y-accent/5 rounded-xs'>
          <div className='flex flex-col gap-10'>
            <h2 className='text-[#df3e0d]/50 text-[60px] font-600 leading-[66px]'>
              Stronger presence for a better future
            </h2>

            <p className='font-500 text-[30px] leading-[42px] '>
              We manage your digital presence, so you can manage your buisness
            </p>

            <div className='flex gap-4'>
              <button className='rounded-xs bg-accent px-[30px] font-medium text-[14px] text-white'>
                Get a quote
              </button>

              <button className='rounded-xs bg-accent/5 px-[15px] py-[10px] font-medium text-[14px] text-accent'>
                Book a Consultation
              </button>
            </div>

          </div>
          <div className=''>
            <img 
              src='/371shots_so.png'
              className='rotate-x-5 -rotate-y-10 -skew-y-10'
            />
          </div>
        </div>
      </main>
        
    </div>
  )
}

export default HeroSection
import React from 'react'

function HeroSection() {
  return (
    <div className='min-h-screen '>
      <main className='container mx-auto'>
        <div className='flex justify-between items-center gap-10'>
          <div>
            <h2 className='text-[#df3e0d]/10 text-[60px] font-600 leading-[66px]'>
              Stronger presence for a better future
            </h2>

            <p className='font-500 text-[30px] leading-[42px] '>
              We manage your digital presence, so you can manage your buisness
            </p>

            <div>
              <button className='rounded-sm bg-accent px-[15px] py-[10px] font-medium text-[14px] text-white'>
                Get a quote
              </button>

              <button className='rounded-sm bg-accent/5 px-[15px] py-[10px] font-medium text-[14px] text-accent'>
                Book a Consultation
              </button>
            </div>

          </div>
          <div className=''>
            <img 
              src='/371shots_so.png'
            />
          </div>
        </div>
      </main>
        
    </div>
  )
}

export default HeroSection
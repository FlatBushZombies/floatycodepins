import React from 'react'

const Hero = () => {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md: pb-32 bg-primary'>
        <div>
        <div className='container'>
            <div className='relative z-2 max-w-512 max-lg:max-w-388 text-white'>
                <div className='caption small-2 uppercase'> Software Solutions
                    <h1>
                        Streamlined Code Expertise
                    </h1>
                    <p className='max-w-440 mb-14 body-1 max-md:mb-10'>
                        At Floaty Code Pins we elevate your technical challenges into software solutions, and 
                        enhance your software experience
                    </p>
                </div>
            </div>
            <div className='absolute -top-32 left-[calc(50%-340px)]'>
                   <img src="/hero.png" alt="hero" className='size-1230 max-lg:h-auto w-[1230px] pointer-events-none hero-img_res' />
                </div>
        </div>
        </div>
    </section>
  )
}

export default Hero
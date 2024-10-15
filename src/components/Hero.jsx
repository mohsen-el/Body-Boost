import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justiy-center text-center max-w-[800px] w-full mx-auto p-4 pt-[150px]'>
      <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO GET A</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Body <span className='text-blue-400'>Boost</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknoledge that I may become <span className='text-blue-400 font-medium '>bodily boosted</span> and I accept all the risks of becoming the local <span className='text-blue-400 font-medium'>giant</span>, affected with severe body dismorphia and unable to fit through the doors</p>
      <Button func={() => {
        window.location.href = '#generate'
      }} text={"Accept & Begin"}></Button>
    </div>
  )
}

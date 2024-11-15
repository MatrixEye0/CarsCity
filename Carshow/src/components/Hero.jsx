import React from 'react'
import Search from './Search'

function Hero() {
  return (
   <div>
     <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#e9ebfa]'>
        <h2 className='text-lg'>Find cars for sale and rent near you</h2>
        <h2 className='text-[60px] font-bold'>Find your Dream Car</h2>

        <Search/>
        <img src='/fc.png' className='mt-10'></img>
    </div>
   </div>
  )
}

export default Hero
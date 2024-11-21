import React from 'react'
import { Button } from 'react-day-picker'
import { Link } from 'react-router-dom'

function Pricing({carDetail}) {
  return (
    <div className='p-10 rounded-xl border shadow-md'>
        <h2>Our Price</h2>
        <h2 className='font-bold text-4xl'>{carDetail?.sellingprice}</h2>

<Link to={'/transaction'}>
<button className=' mt-4 bg-blue-500 text-white'>Transaction</button>
</Link>
    </div>
  )
}

export default Pricing
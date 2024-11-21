import React from 'react'

function DetailsHeader({carDetail}) {
  return (
    <div>
        <h2 className='font-bold text-3xl'>{carDetail?.listingtitle}</h2>
        <p className='text-md mt-4'>{carDetail?.tagline}</p>
    </div>
  )
}

export default DetailsHeader
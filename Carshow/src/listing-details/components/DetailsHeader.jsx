import React from 'react'

function DetailsHeader({carDetail}) {
  return (
    <div>
        <h2 className='font-bold text-3xl'>{carDetail?.listingTitle}</h2>
        <p className='text-sm mt-4'>{carDetail?.tagline}</p>
    </div>
  )
}

export default DetailsHeader
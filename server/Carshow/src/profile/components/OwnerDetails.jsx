import React from 'react'

function OwnerDetails({carDetail}) {
  return (
    <div className='p-10 border rounded-xl shadow-md'>
        <h2 className='mt-2 font-bold text-xl'>{carDetail?.userName}</h2>
        <h2 className='mt-2 font-bold text-gray-400'>{carDetail?.createdBy}</h2>
    </div>
  )
}

export default OwnerDetails
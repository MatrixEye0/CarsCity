import React from 'react'
import Header from '@/components/Header'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div>
        <Header/>
        <div className='px-10 md:px-20 my-10'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-3xl'> My Listing </h2>

                <Link to={'/add-listing'}>
                <button className='bg-blue-600 text-white hover:bg-blue-700 rounded'>+Add New Listing</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Profile
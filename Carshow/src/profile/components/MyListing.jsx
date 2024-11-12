import { useUser } from '@clerk/clerk-react'
import { db } from './../../../configs'
import { CarListing } from './../../../configs/schema'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MyListing() {

    const {user}=useUser();

     useEffect(()=>{
      user&&GetUserCarListing()
     },[user])
   
     const GetUserCarListing=async()=>{
        const result=await db.select().form(CarListing)
        .leftJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
        .where(eq(CarListing.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(CarListing.id))

        console.log(result);
     }

  return (
    <div className='mt-8'>
          <div className='flex justify-between items-center'>
                <h2 className='font-bold text-3xl'> My Listing </h2>

                <Link to={'/add-listing'}>
                <button className='bg-blue-600 text-white hover:bg-blue-700 rounded'>+Add New Listing</button>
                </Link>
            </div>
    </div>
  )
}

export default MyListing
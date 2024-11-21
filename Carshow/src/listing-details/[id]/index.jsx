import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailsHeader from '../components/DetailsHeader'
import { useParams } from 'react-router-dom'
import { db } from './../../../configs';
import { CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import ImageGallery from '../components/ImageGallery';
import Pricing from '../components/Pricing';
import Specification from '@/profile/components/Specification';
import OwnerDetails from '@/profile/components/ownerDetails';


function ListingDetail() {

const {id}=useParams();
const [carDetail,setCarDetail]=useState();

useEffect(()=>{
  GetCarDetail();
},[])

const GetCarDetail=async()=>{
  const result=await db.select().from(CarListing)
  .innerJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
  .where(eq(CarListing.id,id));

  const resp=Service.FormatResult(result);
  setCarDetail(resp[0]);
}

  return (
    <div>
        <Header/>

        <div className='p-10 md:px-20'>
          <DetailsHeader carDetail={carDetail}/>

          <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
            {/*left */}
            <div className='md:col-span-2 '> 
<ImageGallery carDetail={carDetail}/>

            </div>
            {/*right */}
            <div className=''>
<Pricing carDetail={carDetail}/>
<Specification carDetail={carDetail}/>
<OwnerDetails carDetail={carDetail}/>
            </div>

          </div>

        </div>
    </div>
  )
}

export default ListingDetail
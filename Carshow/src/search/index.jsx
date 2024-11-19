import { CarListing } from './../../configs/schema';
import { db } from './../../configs';
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';

function SearchByOptions() {
const [searchParam]=useSearchParams();
const condition=searchParam.get('cars');
const make=searchParam.get('make');
const price=searchParam.get('price');


useEffect(()=>{
    GetCarList();
},[])

const GetCarList=async()=>{
    const result =await db.select().from(CarListing)
    .where(condition!=undefined&&eq(CarListing.Condition,condition))
    .where(make!=undefined&&eq(CarListing.make,make))
    
    const resp=Service.FormatResult(result);

}

  return (
    <div>SearchByOptions</div>
  )
}

export default SearchByOptions
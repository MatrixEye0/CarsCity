import { CarListing } from '../../configs/schema';
import { db } from '../../configs';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import Header from '@/components/Header';
import Search from '@/components/Search';
import CarItem from '@/components/CarItem';


function SearchByOptions() {
const [searchParam]=useSearchParams();
const [CarList, setCarList] =useState([]);

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
    setCarList(resp);

}

  return (
    <div>
    <Header/>

    <div className='p-10 bg-black flex justify-center'>
        <Search/>
    </div>

        <div className='p-10'>
            <h2 className='font-bold text-4xl p-10 '>
                Search Result
            </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
      {CarList.map((item,index)=>(
            <div key={index}>
                <CarItem car={item}/>
                </div>
        ))}
      </div>
       

        </div>

</div>
  )
}

export default SearchByOptions
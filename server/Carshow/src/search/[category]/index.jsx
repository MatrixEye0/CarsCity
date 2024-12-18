import Header from '@/components/Header'
import Search from '@/components/Search'
import { CarListing } from '../../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../configs';
import Service from '@/Shared/Service';
import CarItem from '@/components/CarItem';



function SearchByCategory () {

    const {category}=useParams();
    const [CarList,setCarlist]=useState([]);

    useEffect(()=>{
        GetCarList();
    },[])

    const GetCarList=async()=>{
        const result=await db.select().from(CarListing)
        .where(eq(CarListing.Category,category))

        
        setCarlist(result);
    }

  return (
    <div>
        <Header/>

        <div className='p-10 bg-black flex justify-center'>
            <Search/>
        </div>

            <div className='p-10'>
                <h2 className='font-bold text-4xl p-10 '>
                    {category}
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

export default SearchByCategory
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from '@radix-ui/react-select'
import { FaSearch } from "react-icons/fa";
import Data from '@/Shared/Data';
import { Link } from 'react-router-dom';

function Search() {

const [cars,setCars]=useState();
const [make,setMake]=useState();
const [price,setprice]=useState();

  return (
    <div className='flex flex-col md:flex-row p-2 md:p-4 bg-white rounded-md md:rounded-full gap-10 px-5 items-center w-[60%]'>
      
      <Select onValueChange={(value)=>setCars(value)}>
        <SelectTrigger  className=" bg-white outline-none md:border-none w-full shadow-none text-lg"> 
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Old">Old</SelectItem>
        </SelectContent>
      </Select>
       
      <Separator orientation="vertical" className="h-full w-px bg-gray-300 mx-4 hidden md:block" />

      <Select onValueChange={(value)=>setMake(value)}>
        <SelectTrigger   className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Cars Model" />
        </SelectTrigger>
        <SelectContent>
        { Data.CarMakes.map((maker,index)=>(
            <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
        ))}
        </SelectContent>
      </Select>
      
      <Separator orientation="vertical" className="h-full w-px bg-gray-300 mx-4 hidden md:block " />

      <Select onValueChange={(value)=>setprice(value)}>
        <SelectTrigger  className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
        { Data.Pricing.map((price,index)=>(
            <SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>
        ))}
          
        </SelectContent>
      </Select>
      <Link to={'/search?cars='+cars+"&make="+make+"&price="+price}>
      <FaSearch  className='text-[36px] bg-purple-600 rounded-full p-3 text-white 
      hover:scale-105 transition-all cursor-pointer'/>
      </Link>

    </div>
  )
}

export default Search

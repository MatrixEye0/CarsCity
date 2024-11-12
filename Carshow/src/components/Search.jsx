import React from 'react'
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

function Search() {
  return (
    <div className='flex flex-col md:flex-row p-2 md:p-4 bg-white rounded-md md:rounded-full gap-10 px-5 items-center w-[60%]'>
      
      <Select>
        <SelectTrigger  className=" bg-white outline-none md:border-none w-full shadow-none text-lg"> 
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>
       
      <Separator orientation="vertical" className="h-full w-px bg-gray-300 mx-4 hidden md:block" />

      <Select>
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

      <Select>
        <SelectTrigger  className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
        { Data.Pricing.map((price,index)=>(
            <SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>
        ))}
          
        </SelectContent>
      </Select>
      <div>
      <FaSearch  className='text-[36px] bg-purple-600 rounded-full p-3 text-white 
      hover:scale-105 transition-all cursor-pointer'/>
      </div>

    </div>
  )
}

export default Search

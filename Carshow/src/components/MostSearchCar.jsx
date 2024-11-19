import React from "react";
import CarItem from "./CarItem";
import FakeData from "../Shared/FakeData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarImages, CarListing } from "./../../configs/schema";
import { desc, eq } from "drizzle-orm";
import { useState, useEffect } from "react";
import Service from "@/Shared/Service";

function MostSearchCar() {

const [carList,setCarList]=useState([]);
useEffect(()=>{
  GetPopularCarlist();
},[])

const GetPopularCarlist= async ()=>{
  const result= await db.select() 
  .from(CarListing)
  .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
  
  .orderBy(desc(CarListing.id));
   
  const resp=Service.FormatResult(result);
  setCarList(resp);
}

  return (
    <div className="mx-24">
      <h2 className="font-bold text-3xl text-center my-16 mb-8">
        Most Searched Cars
      </h2>

      <Carousel>
        <CarouselContent>
          {carList.map((car, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <CarItem car={car} key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchCar;

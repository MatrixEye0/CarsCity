import { Separator } from "@radix-ui/react-select";
import React from "react";
import { BsFuelPump } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";

function CarItem({ car }) {

  return (
    <Link to={"/listing-detail/" + car?.id}>
      <div className="max-w-96 rounded-xl bg-white border hover:shadow-md cursor-pointer">
        <h2 className="absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white">
          New
        </h2>

        <img
          src={`/public/${car.CarImages}`}
          width="100%"
          height={250}
          className="rounded-t-xl"
          alt="Car"
        />

        <div className="p-4">
          <h2 className="font-bold text-black text-lg mb-2">
            {car?.listingtitle}
          </h2>

          <Separator className="h-[1px] w-full bg-gray-500 mb-4" />

          <div className="grid grid-cols-3 mt-5">
            <div className="flex flex-col items-center">
              <BsFuelPump className="text-lg mb-2" />
              <h2>{car?.fueltype || "N/A"}</h2>
            </div>
            <div className="flex flex-col items-center">
              <IoSpeedometerOutline className="text-lg mb-2" />
              <h2>{car?.Colour || "N/A"}</h2>
            </div>
            <div className="flex flex-col items-center">
              <GiCarDoor className="text-lg mb-2" />
              <h2>{car?.door || "N/A"}</h2>
            </div>
          </div>

          <Separator className="my-2 h-[1px] w-full bg-gray-500 mb-4" />

          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl">{car?.sellingprice}</h2>
            <h2 className="text-blue-600 text-sm flex gap-2 items-center">
              View Details <IoMdOpen />
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarItem;

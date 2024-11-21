import IconField from "@/add-listing/components/iconField";
import CarItem from "@/components/CarItem";
import CarSpecification from "@/Shared/CarSpecification";
import React from "react";

function Specification({ carDetail }) {
  return (
    <div className=" p-10 rounded-xl border shadow-md mt-7">
      <h2 className="font-medium text-2xl">Specification</h2>
      {CarSpecification.map((item, index) => (
        <div className="mt-4 flex items-center justify-between" key={index}>
          <h2 className="flex gap-2">
            {" "}
            <IconField icon={item.icon} /> {item?.label}
          </h2>
          <h2>{carDetail?.[item?.name]}</h2>
        </div>
      ))}
    </div>
  );
}

export default Specification;

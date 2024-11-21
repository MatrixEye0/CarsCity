import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import carDetails from "../Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import features from "../Shared/features.json";
import { Button } from "@/components/ui/button";
import { db } from "../../configs";
import { CarListing } from "../../configs/schema";
import IconField from "./components/iconField";
import UploadImages from "./components/UploadImages";
import moment from "moment";
import { useUser } from "@clerk/clerk-react";

function AddListing() {
  const [formData, setFormData] = useState({});
  const [featuresData, setFeaturesData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useUser();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextareaChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeatureChange = (name, checked) => {
    setFeaturesData((prevData) => {
      if (checked) {
        // Add the feature if checked
        return [...prevData, name];
      } else {
        // Remove the feature if unchecked
        return prevData.filter((feature) => feature !== name);
      }
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const imgFormData = new FormData();
      imgFormData.append("img", selectedFile);
      const response = await fetch ("http://localhost:5000/api/upload", 
      {
        method: "POST",
        body: imgFormData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }
      console.log(formData)
      const img = await response.json();

      const result = await db.insert(CarListing).values({
        ...formData,
        features: featuresData,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        postedOn: moment().format("DD/MM/yyyy"),
        CarImages: img.file.originalName,
      });
      if (result) {
        console.log("Data Saved");
        setFormData({});
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  
  return (
    <div>
      <Header />

      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-3xl">Add New Listing</h2>

        <form className="p-10 border rounded-xl mt-10" onSubmit={onSubmit}>
          {/* Car Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetail.map((item, index) => (
                <div key={index}>
                  <label className="text-sm flex gap-2 items-center mb-2">
                    <IconField icon={item?.icon} />
                    {item?.label}{" "}
                    {item.required && <span className="text-red-600">*</span>}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField
                      item={item}
                      value={formData[item.name] || ""}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <DropdownField
                      item={item}
                      value={formData[item.name] || ""}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "textarea" ? (
                    <textarea
                      value={formData[item?.name] || "Write ..."}
                      onChange={(e) =>
                        handleTextareaChange(item.name, e.target.value)
                      }
                      required={item.required}
                      className="border rounded p-2 w-full"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <Separator className="h-0.5 bg-gray-200 my-6" />

          {/* Features */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {features.features.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Checkbox
                    checked={formData[item.name] || false}
                    onCheckedChange={(value) =>
                      handleFeatureChange(item.name, value)
                    }
                  />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>

          <Separator className="h-0.5 bg-gray-200 my-6" />

          {/* Upload Image */}
          <UploadImages
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />

          {/* Submit Button */}
          <div className="mt-10 flex justify-end">
            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700 rounded"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;

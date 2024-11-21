import { useUser } from '@clerk/clerk-react';
import { db } from './../../../configs';
import { CarListing } from './../../../configs/schema';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { eq, desc } from 'drizzle-orm';
import Service from '@/Shared/Service';
import CarItem from '@/components/CarItem';

function MyListing() {
  const { user } = useUser();
  const [listings, setListings] = useState([]);

  const GetUserCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.postedOn));

      console.log(result);
    
    // Format the result using the Service helper function
    const formattedResult = Service.FormatResult(result);

    setListings(formattedResult); // Save the formatted result in state
  };

  useEffect(() => {
    if (user) {
      GetUserCarListing();
    }
  }, [user]);

  return (
    <div className='mt-8'>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl">My Listings</h2>
        <Link to="/add-listing">
          <button className="bg-blue-600 text-white hover:bg-blue-700 rounded px-4 py-2">
            + Add New Listing
          </button>
        </Link>
      </div>

      {/* Listings */}
      <div className='border-black rounded mt-5'>
        {listings.length > 0 ? (
          listings.map((item, index) => (
            <div key={index}>
              <CarItem car={item} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">No listings available.</p>
        )}
      </div>
    </div>
  );
}

export default MyListing;

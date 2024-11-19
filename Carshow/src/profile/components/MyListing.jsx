import { useUser } from '@clerk/clerk-react';
import { db } from './../../../configs';
import { CarListing, CarImages } from './../../../configs/schema'; 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { eq, desc } from 'drizzle-orm';
import CarItem from '@/components/CarItem';

function MyListing() {
  const { user } = useUser();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetUserCarListing = async () => {
    if (!user?.primaryEmailAddress) return;
    setLoading(true);
    try {
      const result = await db
        .select()
        .from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(eq(CarListing.createdBy, user.primaryEmailAddress))
        .orderBy(desc(CarListing.id));
         
        const resp=Service.FormatResult(result)
        setCarlist(resp);

      setListings(result);
    } catch (error) {
      console.error('Error fetching listings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetUserCarListing();
  }, [user]);

  return (
    <div className='mt-8'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-3xl'>My Listings</h2>
        <Link to='/add-listing'>
          <button className='bg-blue-600 text-white hover:bg-blue-700 rounded'>
            + Add New Listing
          </button>
        </Link>
      </div>

      {/* Listings */}
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {loading ? (
          <p>Loading...</p>
        ) : listings.length > 0 ? (
          listings.map((listing, index) => (
            <div
              key={index}
              className='p-4 border rounded shadow-md flex flex-col justify-between'
            >
              <img
                src={listing.CarImages?.img || '/ccc.png'}
                alt={listing.CarListing?.listingtitle || 'Listing'}
                className='w-full h-48 object-cover rounded'
              />
              <h3 className='font-semibold text-lg mt-2'>
                {listing.CarListing?.listingtitle}
              </h3>
              <p className='text-gray-600'>{listing.CarListing?.tagline}</p>
              <p className='text-blue-600 font-bold'>
                ${listing.CarListing?.sellingprice}
              </p>
            </div>
          ))
        ) : (
          <p className='text-gray-500 text-center'>No listings found.</p>
        )}
      </div>
    </div>
  );
}

export default MyListing;

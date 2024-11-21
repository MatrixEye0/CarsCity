import React from 'react'

function InfoSection() {
  return (
    <section>
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://www.topgear.com/sites/default/files/2024/05/1-Mercedes-G-Class-review.jpg?w=892&h=502"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
  
        <div className="relative flex items-center bg-gray-100">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              About our company
            </h2>
  
            <p className="mt-4 text-gray-600">
            At CarsCity, we redefine the car-buying and selling experience with innovation, 
            transparency, and efficiency. As a trusted platform, we connect buyers and sellers seamlessly, 
            offering a wide range of vehicles to suit every preference and budget. Our commitment to
             excellence ensures every car listed is thoroughly inspected, providing reliability and peace of mind. 
             With cutting-edge technology and customer-first service, CarsCity simplifies the process,
              making it faster and more convenient. Whether you’re seeking your dream car or looking to sell, 
              CarsCity is your one-stop destination for all automotive needs.
             Drive with confidence, powered by CarsCity’s unmatched expertise and dedication.
            </p>
  
        
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InfoSection
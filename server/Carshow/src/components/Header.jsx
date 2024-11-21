import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Home from '../Home';

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-3 pl-10 pr-10">

      <Link to='/'>  
      <img src="/CarsCity.png" width={150} height={80} />
      </Link>

      <ul className="hidden md:flex gap-16 ">
        <Link to='/' >
        <li className="font-medium hover:scale-105 translate-all cursor-pointer hover:text-primary text-black">
          Home
        </li>
        </Link>


      <Link to={'/profile'}>
      <li className="font-medium hover:scale-105 translate-all cursor-pointer hover:text-primary text-black">
          My Listing
        </li>
      </Link>


       <Link to={'/search/:category'}>
       <li className="font-medium hover:scale-105 translate-all cursor-pointer hover:text-primary text-black">
          Search
        </li>
       </Link>
       
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Link to={"/profile"}>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded">
              Submit listing
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded">
            Submit
          </Button>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

export default Header;

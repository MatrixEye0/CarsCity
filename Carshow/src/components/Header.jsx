import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-3 pl-10 pr-10">
      <img src="CarsCity.png" width={150} height={80} />

      <ul className="hidden md:flex gap-16 ">
        <li className="font-medium hover:scale-105 translate-all cursor-pointer hover:text-primary">
          Home
        </li>
        <li className="font-medium hover:scale-105 translate-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="font-medium hover:scale-105 translate-all cursor-pointer hover:text-primary">
          New
        </li>
        <li className="font-medium hover:scale-105 translate-all cursor-pointer hover:text-primary">
          preowend
        </li>
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

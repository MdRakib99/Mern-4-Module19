import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Search = () => {
  return (
    <div className='bg-[#212529]  py-10'>
      <div className='flex justify-between mx-20'>
        {/* logo */}
        <div>
          <span className='text-[#3e5bc4] font-bold text-3xl'>H</span>
          <span className='text-3xl text-white'>mart</span>
        </div>
        {/* search */}
        <div>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search'
              className='py-2 pl-8 pr-4 w-96 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 '
            />
            <div className='absolute inset-y-0 left-0 flex items-center pl-2'>
              <CiSearch />
            </div>
          </div>
        </div>

        {/* Cart & wish Icon */}

        <div className='text-white flex justify-center items-center text-2xl  gap-5'>
          <NavLink to='/wish'>
            <CiHeart />
          </NavLink>
          <NavLink to='/cart'>
            <LuShoppingBag />
          </NavLink>
          <NavLink to='/login'>Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Search;

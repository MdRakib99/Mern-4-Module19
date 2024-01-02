import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

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
              {/* <svg
              className='h-4 w-4 text-gray-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m0 0l-6-6m6 6l-6 6m6-6l6 6'
              />
            </svg> */}
              <CiSearch />
            </div>
          </div>
        </div>

        {/* Cart & wish Icon */}

        <div className='text-white flex justify-center items-center text-2xl  gap-5'>
          <div>
            <CiHeart />
          </div>
          <div>
            <LuShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

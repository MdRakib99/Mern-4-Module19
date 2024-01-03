import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto flex flex-col items-center'>
        <div>
          <span className='text-[#3e5bc4] font-bold text-3xl'>H</span>
          <span className='text-3xl text-white'>mart</span>
        </div>
        <p className='text-gray-400 mb-6'>
          Your one-stop shop for quality products and great deals!
        </p>
        <div className='flex space-x-4'>
          <a href='#' className='hover:text-gray-400 transition duration-300'>
            Home
          </a>
          <a href='#' className='hover:text-gray-400 transition duration-300'>
            Shop
          </a>
          <a href='#' className='hover:text-gray-400 transition duration-300'>
            About Us
          </a>
          <a href='#' className='hover:text-gray-400 transition duration-300'>
            Contact
          </a>
        </div>
        <div className='mt-4'>
          <p className='text-gray-400'>
            &copy; 2024 Hmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

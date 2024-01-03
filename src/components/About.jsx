import React from "react";

const About = () => {
  return (
    <div className='container mx-auto my-8 p-8'>
      <h2 className='text-2xl font-bold mb-4'>About Us</h2>
      <p className='text-gray-700 mb-4'>
        Welcome to our online store! Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <p className='text-gray-700 mb-4'>
        Our mission is to provide high-quality products and exceptional customer
        service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className='text-gray-700 mb-4'>
        If you have any questions or concerns, feel free to contact us at{" "}
        <a
          href='mailto:info@example.com'
          className='text-blue-500 hover:underline'
        >
          info@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default About;

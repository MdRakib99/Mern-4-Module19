import React from "react";

const Contacts = () => {
  return (
    <div className='container mx-auto my-8 p-8'>
      <h2 className='text-3xl font-bold mb-6'>Contact Us</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Our Office</h3>
          <p className='text-gray-600'>
            123 Main Street,
            <br />
            Cityville, State, ZIP
            <br />
            Country
          </p>
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>
          <p className='text-gray-600'>
            Email: info@example.com
            <br />
            Phone: +1 (123) 456-7890
          </p>
        </div>
      </div>
      <div className='mt-8'>
        <h3 className='text-xl font-semibold mb-4'>Send Us a Message</h3>
        <form>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700 font-medium'>
              Your Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your name'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-medium'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-gray-700 font-medium'
            >
              Your Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='4'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your message'
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;

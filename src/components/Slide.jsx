import React from "react";

const Slide = () => {
  const data = [
    {
      img: "/Image/watch.webp",
    },
    {
      img: "/Image/airbuds.jpg",
    },
    {
      img: "/Image/iphone.jpeg",
    },
    {
      img: "/Image/musicBox.webp",
    },
    {
      img: "/Image/powerBank.jpeg",
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {data.map((item, index) => (
        <div key={index} className='bg-white p-4 rounded-md shadow-md'>
          <img
            className='w-full h-auto rounded-md'
            src={item.img}
            alt={`Product ${index + 1}`}
          />
          <div className='mt-2'>
            <p className='text-gray-800 font-bold text-sm'>{`Product ${
              index + 1
            }`}</p>
            <p className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet.</p>
            <p className='text-green-600 font-bold mt-2'>$99.99</p>
            <button className='bg-blue-500 text-white px-2 py-1 rounded-md mt-2 hover:bg-blue-700 transition duration-300'>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slide;

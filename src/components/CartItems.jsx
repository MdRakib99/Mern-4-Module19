import React from "react";

const CartItems = () => {
  let data = [
    { id: 1, img: "/Image/watch.webp", name: "SmartWatch" },
    { id: 2, img: "/Image/airbuds.jpg", name: "Air Buds" },
    { id: 3, img: "/Image/iphone.jpeg", name: "IPhne 15 pro max" },
  ];

  return (
    <div className='container mx-auto my-8 p-8'>
      <h2 className='text-2xl font-bold mb-4'>Shopping Cart</h2>
      {data.map((item) => (
        <div
          key={item.id}
          className='flex items-center border-b border-gray-300 py-4'
        >
          <img
            src={item.img}
            alt={item.name}
            className='rounded-full h-16 w-16 mr-4'
          />
          <div>
            <p className='text-lg font-semibold'>{item.name}</p>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className='flex items-center mt-2'>
              <button className='text-gray-500 hover:text-red-500 focus:outline-none mr-4'>
                Remove
              </button>
              <p className='text-gray-800 font-bold'>$29.99</p>
            </div>
          </div>
        </div>
      ))}
      <div className='mt-8 flex justify-end'>
        <div className='text-lg font-bold'>Total: $89.97</div>
      </div>
      <div className='mt-8 flex justify-end'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;

import React, { useState, useEffect } from "react";

const Card = () => {
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/database/cardItems.json");
      const data = await response.json();
      setCardItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className='container mx-auto my-8 p-8'>
      <h2 className='text-2xl font-bold mb-4'>Popular Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {cardItems.projects ? (
          cardItems.projects.map((item) => (
            <div key={item.id} className='bg-white p-4 rounded-md shadow-md'>
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-auto rounded-md mb-4'
              />
              <p className='text-gray-800 font-semibold'>{item.title}</p>
              <p className='text-gray-500'>{item.price}</p>
              <button className='bg-blue-500 text-white px-2 py-1 rounded-md mt-2 hover:bg-blue-700 transition duration-300'>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Card;

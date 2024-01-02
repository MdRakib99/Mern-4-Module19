import React from "react";

const Banner = () => {
  const data = [
    {
      img: "/Image/laptop.webp",
    },
    {
      img: "/Image/microphone.webp",
    },
    {
      img: "/Image/HeadPhone.webp",
    },
  ];
  return (
    <div className=''>
      {/* content */}

      {/* image  */}
      <div className='flex flex-wrap gap-4'>
        <img
          className='w-[408px] h-[271px] top-[146px] left-[733px] rounded-md'
          src='/Image/laptop.webp'
          alt='#'
        />
        <img
          className='w-[408px] h-[271px] top-[146px] left-[733px] rounded-md'
          src='/Image/microphone.webp'
          alt='#'
        />
        <img
          className='w-[408px] h-[271px] top-[146px] left-[733px] rounded-md'
          src='/Image/HeadPhone.webp'
          alt='#'
        />
      </div>
    </div>
  );
};

export default Banner;

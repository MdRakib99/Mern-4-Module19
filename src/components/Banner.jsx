import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='pb-9'>
      {/* Slider */}
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className='flex justify-center w-full'>
            <img
              src={item.img}
              alt={`Slide ${index + 1}`}
              className='rounded-lg w-full max-w-[560px]'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

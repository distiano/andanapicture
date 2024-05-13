import React, { Component } from 'react';
import Slider from 'react-slick';
import image1 from '../../assets/images/image2.jpg';
import image2 from '../../assets/images/image3.jpg';
import image3 from '../../assets/images/image1.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image8 from '../../assets/images/image8.jpg';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Gallery() {
  // const settings = {
  //   className: 'center',
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: '60px',
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 4000,
  //   cssEase: 'linear',
  // };

  return (
    <div className="py-16 px-6 md:px-24 bg-[#faf6f2]">
      <div className="flex items-center justify-center ">
        <div className="w-1/5 sm:w-1/5 border-t border-yellow-900 mr-4"></div>
        <h1 className="text-4xl font-light text-center text-[#433a33] px-5">Gallery</h1>
        <div className="w-1/5  border-t border-yellow-900 ml-4"></div>
      </div>
      {/* <div className="mt-10">
        <Slider {...settings}>
          <div className="border-8 border-white relative group">
            <img src={image1} className="h-56 brightness-75" alt="" />
            <img src={image1} className="h-56 absolute inset-0 opacity-0 group-hover:opacity-100 brightness-50 transition-opacity duration-300" alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h5 className="text-xl mb-5">Wedding</h5>
              <h3 className="text-3xl font-semibold" style={{ fontFamily: '"Great Vibes", cursive' }}>
                Bella - Lukas
              </h3>
            </div>
          </div>
          <div className="border-8 border-white relative group">
            <img src={image2} className="h-56 brightness-75" alt="" />
            <img src={image2} className="h-56 absolute inset-0 opacity-0 group-hover:opacity-100 brightness-50 transition-opacity duration-300" alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h5 className="text-xl mb-5">Wedding</h5>
              <h3 className="text-3xl font-semibold" style={{ fontFamily: '"Great Vibes", cursive' }}>
                Bella - Lukas
              </h3>
            </div>
          </div>
          <div className="border-8 border-white relative group">
            <img src={image1} className="h-56 brightness-75" alt="" />
            <img src={image1} className="h-56 absolute inset-0 opacity-0 group-hover:opacity-100 brightness-50 transition-opacity duration-300" alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h5 className="text-xl mb-5">Wedding</h5>
              <h3 className="text-3xl font-semibold" style={{ fontFamily: '"Great Vibes", cursive' }}>
                Bella - Lukas
              </h3>
            </div>
          </div>
        </Slider>
      </div> */}
      <div className="mt-10 grid sm:grid-cols-3 gap-3 ">
        <div className="mx-auto">
          <Link to="/wedding">
            <div className="border-8 relative size-[350px]">
              <img src={image4} className="size-full brightness-75 hover:brightness-50 transition duration-300 ease-in-out" alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h3 className="text-3xl font-thin">Wedding</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="mx-auto">
          <Link to="/yearbook">
            <div className="border-8 relative size-[350px]">
              <img src={image5} className="size-full brightness-75 hover:brightness-50 transition duration-300 ease-in-out" alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h3 className="text-3xl font-thin">Yearbook</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="mx-auto">
          <Link to="/companyprofile">
            <div className="border-8 relative size-[350px]">
              <img src={image6} className="size-full brightness-75 hover:brightness-50 transition duration-300 ease-in-out" alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h3 className="text-3xl font-thin">Video Company Profile</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

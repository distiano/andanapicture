import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Example from '../Components/Navbar/Navbar';
import bg1 from '../assets/images/bg1.jpg';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { Image } from 'antd';
import Footer from '../Components/Footer/Footer';

const YearbookCustomers = () => {
  const { id } = useParams();

  const [yearbookImg, setYearbookImg] = useState([]);
  const [yearbookName, setYearbookName] = useState([]);

  useEffect(() => {
    fetch('https://andana-picture-api.vercel.app/yearbookImg/ambilData')
      .then((response) => response.json())
      .then((data) => {
        setYearbookImg(data);
      })
      .catch((error) => {
        console.error('Terjadi kesalahan:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://andana-picture-api.vercel.app/yearbook/ambilData')
      .then((response) => response.json())
      .then((data) => {
        setYearbookName(data);
      })
      .catch((error) => {
        console.error('Terjadi kesalahan:', error);
      });
  }, []);

  const [showGallery, setShowGallery] = useState(false);
  const galleryRef = useRef(null);

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  useEffect(() => {
    if (showGallery && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showGallery]);

  return (
    <div className="bg-[#faf6f2]">
      <Example />
      {yearbookName.map(
        (item, index) =>
          item.id === id && (
            <div key={index}>
              <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                <div className="relative isolate px-6 lg:px-16 flex items-center justify-center min-h-[80vh] bg-black bg-opacity-50">
                  <h1 className="text-4xl text-white font-thin">{item.name}</h1>
                </div>
              </div>
            </div>
          )
      )}
      <div className="flex items-center justify-center h-[20vh]">
        <button onClick={toggleGallery}>
          <IoMdArrowDropdownCircle className="size-10 text-[#433a33]" />
        </button>
      </div>
      <div ref={galleryRef} className={`photo-gallery ${showGallery ? '' : 'hidden'} px-6 sm:px-10 grid md:grid-cols-3 gap-6 justify-center py-24`}>
        {yearbookImg.map(
          (img, index) =>
            img.idYearbook === id && (
              <div key={index}>
                <Image src={img.image} height={400} className="size-full object-cover" alt={`Image ${index + 1}`} />
              </div>
            )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default YearbookCustomers;

import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Example from '../Components/Navbar/Navbar';
import bg1 from '../assets/images/bg1.jpg';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { Image } from 'antd';
import Footer from '../Components/Footer/Footer';

const WeddingCustomers = () => {
  const { id } = useParams();

  const [weddingImg, setWeddingImg] = useState([]);
  const [weddingName, setWeddingName] = useState([]);

  useEffect(() => {
    fetch('https://andana-picture-api.vercel.app/weddingImg/ambilData')
      .then((response) => response.json())
      .then((data) => {
        setWeddingImg(data);
      })
      .catch((error) => {
        console.error('Terjadi kesalahan:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://andana-picture-api.vercel.app/wedding/ambilData')
      .then((response) => response.json())
      .then((data) => {
        setWeddingName(data);
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

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="bg-[#faf6f2]">
      <Example />
      {weddingName.map(
        (item, index) =>
          item.id === id && (
            <div key={index}>
              <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                <div className="relative isolate px-6 lg:px-16 flex items-center justify-center min-h-[100vh] bg-black bg-opacity-50">
                  <h1 className="text-4xl text-white font-thin">{item.name}</h1>
                </div>
              </div>
            </div>
          )
      )}
      {/* <div className="flex items-center justify-center h-[20vh]">
        <button onClick={toggleGallery}>
          <IoMdArrowDropdownCircle className="size-10 text-[#433a33]" />
        </button>
      </div> */}
      <h1 className="text-center text-3xl mt-24 text-[#433a33]">Photo Gallery</h1>
      <div ref={galleryRef} className={`photo-gallery ${showGallery ? '' : ''} px-6 sm:px-10 grid lg:grid-cols-3 gap-6 justify-center mx-auto pt-10 pb-24`}>
        {weddingImg.map(
          (img, index) =>
            img.idWedding === id && (
              <div key={index} className="flex justify-center">
                <Image src={img.image} height={400} width={375} className=" object-cover " alt={`Image ${index + 1}`} />
              </div>
            )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WeddingCustomers;

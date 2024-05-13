import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Example from '../Components/Navbar/Navbar';
import bg1 from '../assets/images/bg1.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image8 from '../assets/images/image8.jpg';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import weddingcustomers from '../assets/data/weddingcustomers';

const WeddingCustomers = () => {
  const { id } = useParams();

  const weddingCustomers = weddingcustomers.find((weddingcustomers) => weddingcustomers.id.toString() === id);

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
      <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="relative isolate px-6 lg:px-16 flex items-center justify-center min-h-[80vh] bg-black bg-opacity-30">
          <h1 className="text-4xl text-white font-thin">{weddingCustomers.couple}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center h-[20vh]">
        <button onClick={toggleGallery}>
          <IoMdArrowDropdownCircle className="size-10 text-[#433a33]" />
        </button>
      </div>
      <div ref={galleryRef} className={`photo-gallery ${showGallery ? '' : 'hidden'} px-6 sm:px-10 grid md:grid-cols-3 gap-6 justify-center py-24`}>
        {weddingCustomers.imgGallery.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Image ${index + 1}`} />
          </div>
        ))}
        {/* <div>
          <img src={image5} alt="" />
        </div>
        <div>
          <img src={image6} alt="" />
        </div>
        <div>
          <img src={image8} alt="" />
        </div> */}
        {/* Add more images here */}
      </div>
    </div>
  );
};

export default WeddingCustomers;

import Example from '../Components/Navbar/Navbar';
import bg1 from '../assets/images/bg1.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image8 from '../assets/images/image8.jpg';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import { useEffect } from 'react';

const Yearbook = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#faf6f2]">
      <Example />
      <div className="hero bg-cover " style={{ backgroundImage: `url(${bg1})` }}>
        <div className="min-h-[40vh] flex justify-center items-center pt-14 bg-black bg-opacity-30">
          <h1 className="text-5xl font-bold text-[#433a33]" style={{ fontFamily: '"Sedan", serif' }}>
            Yearbook
          </h1>
        </div>
      </div>
      <div className="py-16 px-6 sm:px-24 grid sm:grid-cols-3 gap-3 justify-center">
        <div className="mx-auto">
          <Link to="/yearbook">
            <div className="border-8 relative size-80 hover:scale-105 transition duration-300">
              <img src={image4} className="size-full brightness-75 hover:brightness-50 transition duration-300 ease-in-out" alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h5 className="text-xl mb-3">Yearbook</h5>
                <h3 className="text-2xl " style={{ fontFamily: '"Sedan", serif' }}>
                  Bella - Lukas
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="mx-auto">
          <Link to="/yearbook">
            <div className="border-8 relative size-80 hover:scale-105 transition duration-300">
              <img src={image5} className="size-full brightness-75 hover:brightness-50 transition duration-300 ease-in-out" alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h5 className="text-xl mb-3">Yearbook</h5>
                <h3 className="text-2xl " style={{ fontFamily: '"Sedan", serif' }}>
                  Bella - Lukas
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="mx-auto">
          <Link to="/yearbook">
            <div className="border-8 relative size-80 hover:scale-105 transition duration-300">
              <img src={image6} className="size-full brightness-75 hover:brightness-50 transition duration-300 ease-in-out" alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h5 className="text-xl mb-3">Yearbook</h5>
                <h3 className="text-2xl " style={{ fontFamily: '"Sedan", serif' }}>
                  Bella - Lukas
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Yearbook;

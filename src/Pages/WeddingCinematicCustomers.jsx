import Footer from '../Components/Footer/Footer';
import Example from '../Components/Navbar/Navbar';
import bg1 from '../assets/images/bg1.jpg';
import { useEffect, useState } from 'react';
import comprocustomers from '../assets/data/comprocustomers';
import { useParams } from 'react-router-dom';
import WeddingCinematic from './WeddingCinematic';

const WeddingCinematicCustomers = () => {
  const { id } = useParams();

  // const comproCustomers = comprocustomers.find((comprocustomers) => comprocustomers.id.toString() === id);

  const [weddingCinematic, setWeddingCinematic] = useState([]);

  useEffect(() => {
    fetch('https://andana-picture-api.vercel.app/weddingCinematic/ambilData')
      .then((response) => response.json())
      .then((data) => {
        setWeddingCinematic(data);
      })
      .catch((error) => {
        console.error('Terjadi kesalahan:', error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#faf6f2]">
      <Example />
      {weddingCinematic.map(
        (video, index) =>
          video.id === id && (
            <div key={index}>
              <div className="hero bg-cover " style={{ backgroundImage: `url(${bg1})` }}>
                <div className="min-h-[40vh] flex justify-center items-center pt-14 bg-black bg-opacity-30">
                  <h1 className="text-3xl lg:text-5xl font-thin text-white text-center" style={{ fontFamily: '"Roboto", serif' }}>
                    {video.name}
                  </h1>
                </div>
              </div>
              <div className="py-24 px-6 md:px-16 mb-16 grid justify-center">
                <div style={{ aspectRatio: '16/9' }} className="flex justify-center">
                  <iframe
                    className="rounded-md mt-3 w-[360px] sm:w-[480px] md:w-[736px] lg:w-[960px]"
                    src={video.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ height: '100%' }}
                  ></iframe>
                </div>{' '}
              </div>
            </div>
          )
      )}

      <Footer />
    </div>
  );
};

export default WeddingCinematicCustomers;

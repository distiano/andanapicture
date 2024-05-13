import Footer from '../Components/Footer/Footer';
import Example from '../Components/Navbar/Navbar';
import bg1 from '../assets/images/bg1.jpg';
import { useEffect } from 'react';

const CompanyProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#faf6f2]">
      <Example />
      <div className="hero bg-cover " style={{ backgroundImage: `url(${bg1})` }}>
        <div className="min-h-[40vh] flex justify-center items-center pt-14 bg-black bg-opacity-30">
          <h1 className="text-5xl font-thin text-white text-center" style={{ fontFamily: '"Roboto", serif' }}>
            Company Profile Video
          </h1>
        </div>
      </div>
      <div className="py-24 grid md:grid-cols-3 gap-16 md:gap-8 px-6 md:px-16 mb-16">
        <div className=" mx-auto  size-full">
          <h1 className="text-lg font-semibold">Profil SMK Raden Umar Said Kudus 2023</h1>
          <iframe
            className="rounded-md size-full mt-3"
            src="https://www.youtube.com/embed/I0HR_dJYD5k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>{' '}
        <div className=" mx-auto  size-full">
          <h1 className="text-lg font-semibold">Profil SMK Raden Umar Said Kudus 2022</h1>
          <iframe
            className="rounded-md size-full mt-3"
            src="https://www.youtube.com/embed/2x3g3Zn0ED0?si=8miX1xcWeIIvSXg3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>{' '}
        <div className=" mx-auto  size-full">
          <h1 className="text-lg font-semibold">PROFIL RM H ISMUN</h1>
          <iframe
            className="rounded-md size-full mt-3"
            src="https://www.youtube.com/embed/axOHTFBbupg?si=KrQsP3xfnKlK669N"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>{' '}
      </div>

      <Footer />
    </div>
  );
};

export default CompanyProfile;

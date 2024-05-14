import { FaInstagram, FaWhatsapp, FaGithub, FaRegPaperPlane } from 'react-icons/fa';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import bg1 from '../../assets/images/bg1.jpg';

const Hero = () => {
  return (
    <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
      <div className="relative isolate px-6 lg:px-16 flex items-center justify-center min-h-screen bg-black bg-opacity-30">
        <div className="rounded-lg ">
          <div className=" text-center text-white">
            <h1 className="text-7xl font-thin  tracking-tight">Cerita Bersamamu </h1>
            <p className="mt-6 font-thin text-base sm:text-lg leading-8 text-grey-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsum!</p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                href="#"
                className="text-center rounded-md flex items-center justify-center gap-4 bg-white py-3 text-sm font-bold text-[#433a33] w-36 sm:w-40 hover:bg-[#433a33] hover:text-white transition duration-300 ease-in-out"
                style={{ boxShadow: ' 4px 4px 4px 0px #00000040' }}
              >
                <FaRegPaperPlane />
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="justify-center items-center flex gap-3 mt-10">
            <h6 className="text-sm font-semibold ">Find Us:</h6>
            <Link to="">
              <FaWhatsapp className="size-5" style={{ color: '#25D366' }} />
            </Link>
            <Link to="https://www.instagram.com/owudev/">
              <FaInstagram className="size-5" style={{ color: '#c32aa3' }} />
            </Link>
            <Link>
              <FaGithub className="size-5" style={{ color: 'black' }} />
            </Link>
          </div> */
}

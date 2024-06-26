import bg2 from '../../assets/images/bg2.jpg';
import image3 from '../../assets/images/image1.jpg';
import image1 from '../../assets/images/image2.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="py-16 bg-[#faf6f2]">
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg2})` }} data-aos="fade-up" data-aos-duration="3000">
        <div className="text-center py-28 bg-black bg-opacity-30">
          <div className="flex items-center justify-center mb-10 text-white">
            <div className="w-1/5 sm:w-1/5 border-t  mr-4"></div>
            <h1 className="text-4xl font-light text-center  px-5">Hello, thank you for reaching us</h1>
            <div className="w-1/5  border-t ml-4"></div>
          </div>
          <p className="px-6 md:px-36 font-extralight text-white">We try to capture every emotion that exsist, such as laughter, happiness or tears of happiness. all contained in the many photos that we convey yo you.</p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Link
              to="https:/wa.me/628112631212"
              className="text-center rounded-md flex items-center justify-center gap-4 bg-white py-3  text-sm font-bold text-[#433a33] hover:bg-[#433a33] hover:text-white w-36 sm:w-40 transition duration-300 ease-in-out"
              style={{ boxShadow: ' 4px 4px 4px 0px #00000040' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="py-16 px-32 ">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="grid sm:grid-cols-2 border-8 border-white" data-aos="zoom-in" data-aos-duration="3000">
            <div data-aos="fade-down-right">
              <img src={image4} alt="" />
            </div>
            <div data-aos="fade-down-left">
              <img src={image5} alt="" />
            </div>
            <div data-aos="fade-up-right">
              <img src={image6} alt="" />
            </div>
            <div data-aos="fade-up-left">
              <img src={image7} alt="" />
            </div>
          </div>{' '}
          <div className="flex flex-col justify-center items-center text-[#433a33]" data-aos="zoom-in" data-aos-duration="3000">
            <FaInstagram className="size-10" />
            <h3 className="text-xl my-5 text-center font-light">Check Out Our Instagram</h3>
            <Link to="https://www.instagram.com/andanapicture/">
              <h3 className="text-xl font-normal">@andanapicture</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

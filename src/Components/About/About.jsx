import { PiFlowerTulip } from 'react-icons/pi';
import image1 from '../../assets/images/image2.jpg';

const About = () => {
  return (
    <div className="py-16 px-10 md:px-16 bg-[#faf6f2]" data-aos="fade-up" data-aos-duration="3000">
      <div className="flex items-center justify-center ">
        <div className="w-1/5 sm:w-1/5 border-t border-yellow-900 mr-4"></div>
        <h1 className="text-4xl font-bold text-center text-[#433a33] px-5">
          <PiFlowerTulip />
        </h1>
        <div className="w-1/5  border-t border-yellow-900 ml-4"></div>
      </div>
      <div className="text-center text-[#433a33]  mt-10 font-light">
        <h3 className=" lg:px-32 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero voluptates nihil rerum nam voluptate commodi reprehenderit culpa obcaecati eligendi?
        </h3>
        <div className="grid sm:grid-cols-2 gap-10 mt-10 items-center">
          <div>
            <p className="font-extralight text-sm md:text-base text-justify" data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, doloribus deleniti. Accusamus veniam possimus sint. Et, blanditiis harum veritatis earum natus aliquid eius pariatur inventore quisquam aspernatur impedit
              incidunt quod. <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, doloribus deleniti. Accusamus veniam possimus sint. Et, blanditiis harum veritatis earum natus aliquid eius pariatur inventore quisquam aspernatur impedit
              incidunt quod.
            </p>
          </div>
          <div className="flex justify-center" data-aos="fade-left">
            <img src={image1} className="h-72 border-8 border-white" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

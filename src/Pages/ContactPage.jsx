import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Example from '../Components/Navbar/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import bg1 from '../assets/images/bg1.jpg';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div>
      <Example />
      <div className="hero bg-cover " style={{ backgroundImage: `url(${bg1})` }}>
        <div className="min-h-[40vh] flex justify-center items-center pt-14 bg-black bg-opacity-30">
          <h1 className="text-5xl font-thin text-white" style={{ fontFamily: '"Roboto", serif' }}>
            Contact
          </h1>
        </div>
      </div>
      <section className="bg-[#faf6f2]" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-16 lg:py-16">
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="h-full pr-6">
                <p className="mb-10 font-light text-sm md:text-base text-[#433a33]">
                  className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#433a33] text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-6">
                      <h3 className=" text-lg  leading-6 text-[#433a33] ">Our Address</h3>
                      <p className="text-[#433a33] text-sm font-light">1230 Maecenas Street Donec Road</p>
                      <p className="text-[#433a33] text-sm font-light">New York, EEUU</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#433a33] text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-6">
                      <h3 className="text-lg  leading-6 text-[#433a33] ">Contact</h3>
                      <p className="text-[#433a33] text-sm font-light">Mobile: +1 (123) 456-7890</p>
                      <p className="text-[#433a33] text-sm font-light">Mail: tailnext@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#433a33] text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-6">
                      <h3 className="text-lg  leading-6 text-[#433a33] ">Working hours</h3>
                      <p className="text-[#433a33] text-sm font-light">Monday - Friday: 08:00 - 17:00</p>
                      <p className="text-[#433a33] text-sm font-light">Saturday &amp; Sunday: 08:00 - 12:00</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl" id="form">
                <h2 className="mb-4 text-2xl text-[#433a33]">Let Us Know Your Bussiness</h2>
                <form action="#" className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#433a33] ">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-[#faf6f2] border border-[#433a33] text-[#433a33] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="name@flowbite.com"
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#433a33] ">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-[#433a33] bg-[#faf6f2] rounded-lg border border-[#433a33] shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Let us know how we can help you"
                      required
                    ></input>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#433a33] ">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-[#433a33] bg-[#faf6f2] rounded-lg shadow-sm border border-[#433a33] focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button type="submit" className=" bg-[#433a33] rounded-md py-3 text-sm font-medium text-white w-36 sm:w-40 hover:bg-[#433a33] hover:text-white transition duration-300 ease-in-out">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="py-16 px-96 bg-[#faf6f2]">
        <div className="p-10 bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="UserEmail" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-[#433a33]">
                <input type="text" id="UserEmail" placeholder="Name" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Name</span>
              </label>{' '}
            </div>
            <div className="mb-6">
              <label htmlFor="UserEmail" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-[#433a33]">
                <input type="email" id="UserEmail" placeholder="Email" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Email</span>
              </label>{' '}
            </div>
            <div className="mb-10">
              <label htmlFor="UserEmail" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-[#433a33]">
                <textarea type="text" id="UserEmail" placeholder="Message" className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Message</span>
              </label>{' '}
            </div>

            <button type="submit" className=" bg-[#433a33] rounded-md py-3 text-sm font-bold text-white w-36 sm:w-40 hover:bg-[#433a33] hover:text-white transition duration-300 ease-in-out">
              Send Message
            </button>
          </form>
        </div>
      </div> */}

      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;

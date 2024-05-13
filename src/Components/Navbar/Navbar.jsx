import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { HiMiniBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Portofolio', href: '/portofolio' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const keepDropdownOpen = () => {
    setIsDropdownOpen(true);
  };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white' : ''}`} style={{ transition: 'background-color 0.3s ease' }}>
      <nav className={`transition-all duration-300 ${isScrolled ? 'p-3' : 'p-8 '} sm:px-36 flex items-center justify-between`} aria-label="Global">
        <div className="hidden lg:flex  justify-evenly flex-1">
          <Link to="/" className={` ${isScrolled ? 'text-[#433a33]' : 'text-[#433a33]'} hover:font-bold`}>
            Home
          </Link>
          <Link to="/about" className={` ${isScrolled ? 'text-[#433a33]' : 'text-[#433a33]'} hover:font-bold `}>
            About Us
          </Link>
        </div>
        <div className="">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <h3 className="text-3xl font-normal text-[#433a33]" style={{ fontFamily: '"Great Vibes", cursive' }}>
              Andana.
            </h3>{' '}
          </a>
        </div>
        <div className="hidden lg:flex  justify-evenly flex-1">
          <div className="relative">
            <button onMouseEnter={toggleDropdown} className="inline-flex justify-center items-center text-[#433a33] hover:font-bold  focus:outline-none">
              Portofolio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 8.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zM10 13a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </button>
            <div onMouseEnter={keepDropdownOpen} onMouseLeave={closeDropdown} className={`dropdown-content absolute mt-2 bg-white text-[#433a33] rounded-sm p-2 text-center w-48 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <Link to="/wedding" className="block py-1 hover:font-bold text-sm ">
                Wedding{' '}
              </Link>
              <Link to="/yearbook" className="block py-1 hover:font-bold text-sm ">
                Yearbook{' '}
              </Link>
              <Link to="/companyprofile" className="block py-1 hover:font-bold text-sm ">
                Company Profile Video{' '}
              </Link>
            </div>
          </div>
          <Link to="/portfolio" className={` ${isScrolled ? 'text-[#433a33]' : 'text-[#433a33]'} hover:font-bold `}>
            Contact
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <HiMiniBars3 className={`h-5 w-5 ${isScrolled ? 'text-black' : 'text-gray-700'} `} aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <IoClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

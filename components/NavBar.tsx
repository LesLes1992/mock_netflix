import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavBarItem from "./NavBarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((preValue) => !preValue);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((preValue) => !preValue);
  }, []);

  return (
    <nav className='w-full fixed z-40 '>
      <div
        className={`
            px-4 md:px-16 py-6  flex flex-row items-center transition duration-500  ${
              showBackground ? "bg-zinc-900 bg-opacity-90" : null
            }`}
      >
        <img className='h-4 lg:h-7' src='/images/logo.png' alt='Logo' />
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavBarItem label='Home' />
          <NavBarItem label='Series' />
          <NavBarItem label='Movie' />
          <NavBarItem label='New & popular' />
          <NavBarItem label='My list' />
          <NavBarItem label='Browse my language' />
        </div>
        <div
          onClick={toggleMobileMenu}
          className='lg:hidden flex flex-row items-center gap-2 ml-8 curse-pointer relative'
        >
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : null
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
            <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className='flex flex-row items-center gap-2 cursor-pointer relative'
          >
            <div className='w-6 h-6 lg:w-10 lg:h-10 overflow-hidden rounded-md'>
              <img src='/images/default-blue.png' alt='Profile' />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : null
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

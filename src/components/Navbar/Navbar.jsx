import { React, useEffect, useState } from 'react';
import './Navbar.scss';
import TopDataSection from '../Top&BottomDataSection/TopDataSection';
import { Link, NavLink } from 'react-router-dom';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import MobileMenu from './MobileMenu/MobileMenu';
const Navbar = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };
  }, []);
  return (
    <>
      <TopDataSection />
      <nav>
        {windowSize.width < 670 ? <MobileMenu /> : <DesktopMenu />}

      </nav>
    </>
  );
};

export default Navbar;
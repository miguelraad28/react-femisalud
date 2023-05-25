import { React, useEffect, useState } from 'react';
import './Navbar.scss';
import TopDataSection from '../Top&BottomDataSection/TopDataSection';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import MobileMenu from './MobileMenu/MobileMenu';
const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, [width]);
  return (
    <>
      <TopDataSection />
      <nav>
        {width < 670 ? <MobileMenu /> : <DesktopMenu />}

      </nav>
    </>
  );
};

export default Navbar;
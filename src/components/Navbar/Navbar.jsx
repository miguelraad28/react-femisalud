import React from 'react';
import './Navbar.scss';
import TopDataSection from '../Top&BottomDataSection/TopDataSection';

const Navbar = () => {
  return (
    <>
    <TopDataSection/>
      <nav>
        <div className="navbarLogoContainer">
          <img src="./images/logohd.png" />
        </div>
        <ul className='navigationContainer'>
          <li className='mainLi'>INICIO<div className='background'></div></li>
          <li className='mainLi'>ESPECIALIDADES<div className='background'></div>
            <ul className='dropdownContainer'>
              <li>GINECOLOGÍA</li>
              <li>OBSTETRICIA</li>
              <li>ENDOCRINOLOGÍA GINECOLÓGICA</li>
            </ul>

          </li>
          <li className='mainLi'>SERVICIOS<div className='background'></div>
            <ul className='dropdownContainer'>
              <li>CONSULTAS MÉDICAS</li>
              <li>ECOGRAFÍAS</li>
              <li>PROCEDIMIENTOS</li>
              <li>CIRUGÍAS</li>
            </ul>
          </li>

        </ul>
      </nav>
    </>
  );
};

export default Navbar;
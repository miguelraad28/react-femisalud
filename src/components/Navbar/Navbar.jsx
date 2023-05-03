import React from 'react';
import './Navbar.scss';
import TopDataSection from '../Top&BottomDataSection/TopDataSection';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <TopDataSection />
      <nav>
        <div className="navbarLogoContainer">
          <img src="./images/logohd.png" />
        </div>
        <ul className='navigationContainer'>
          <Link to="/"><li className='mainLi'>INICIO<div className='background'></div></li></Link>
          <Link to="/especialidades" style={{overflow: 'visible'}}><li className='mainLi' >ESPECIALIDADES<div className='background'></div>
            <ul className='dropdownContainer'>
              <Link to="/especialidades#ginecologia"><li>GINECOLOGÍA</li></Link>
              <Link to="/especialidades#obstetricia"><li>OBSTETRICIA</li></Link>
              <Link to="/especialidades#endocrinologiaGinecologica"><li>ENDOCRINOLOGÍA GINECOLÓGICA</li></Link>
            </ul>

          </li></Link>
          <Link to="/servicios" style={{overflow: 'visible'}}><li className='mainLi' >SERVICIOS<div className='background'></div>
            <ul className='dropdownContainer'>
              <li>CONSULTAS MÉDICAS</li>
              <li>ECOGRAFÍAS</li>
              <li>PROCEDIMIENTOS</li>
              <li>CIRUGÍAS</li>
            </ul>
          </li></Link>
          {/* <Link to="/#sobreNosotros"><li className='mainLi'>SOBRE NOSOTROS<div className='background'></div></li></Link> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
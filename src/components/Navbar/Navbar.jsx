import React from 'react';
import './Navbar.scss';
import TopDataSection from '../Top&BottomDataSection/TopDataSection';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <TopDataSection />
      <nav>
        <div className="navbarLogoContainer">
          <Link to="/"><img src="./images/logohd.png" /></Link>
        </div>
        <ul className='navigationContainer'>
          <NavLink to="/" className={({isActive})=> isActive ? "activeNavLink" : ""}><li className='mainLi'>INICIO<div className='background'></div></li></NavLink>
          <NavLink to="/especialidades" style={{overflow: 'visible'}} className={({isActive})=> isActive ? "activeNavLink" : ""}><li className='mainLi' >ESPECIALIDADES<div className='background'></div>
            <ul className='dropdownContainer'>
              <Link to="/especialidades#ginecologia"><li>GINECOLOGÍA</li></Link>
              <Link to="/especialidades#obstetricia"><li>OBSTETRICIA</li></Link>
              <Link to="/especialidades#endocrinologiaGinecologica"><li>ENDOCRINOLOGÍA GINECOLÓGICA</li></Link>
            </ul>

          </li></NavLink>
          <NavLink to="/servicios" style={{overflow: 'visible'}} className={({isActive})=> isActive ? "activeNavLink" : ""}><li className='mainLi' >SERVICIOS<div className='background'></div>
            <ul className='dropdownContainer'>
              <Link to="/servicios#consultasMedicas"><li>CONSULTAS MÉDICAS</li></Link>
              <Link to="/servicios#ecografias"><li>ECOGRAFÍAS</li></Link>
              <Link to="/servicios#procedimientos"><li>PROCEDIMIENTOS</li></Link>
              <Link to="/servicios#cirugias"><li>CIRUGÍAS</li></Link>
            </ul>
          </li></NavLink>
          {/* <Link to="/#sobreNosotros"><li className='mainLi'>SOBRE NOSOTROS<div className='background'></div></li></Link> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
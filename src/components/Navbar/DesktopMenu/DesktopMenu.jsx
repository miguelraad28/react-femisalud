import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const DesktopMenu = () => {
    return (
        <>
            <div className="navbarLogoContainer">
                <Link to="/"><img src="./images/logohd.png" /></Link>
            </div>
            <ul className='navigationContainer'>
                <div className='mainLiContainer'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "activeNavLink" : ""}><li className='mainLi'>INICIO</li></NavLink>
                </div>
                <div className='mainLiContainer'>
                    <NavLink to="/especialidades" style={{ overflow: 'visible' }} className={({ isActive }) => isActive ? "activeNavLink" : ""}><li className='mainLi' >ESPECIALIDADES</li></NavLink>
                    <ul className='dropdownContainer'>
                        <Link to="/especialidades#ginecologia"><li>GINECOLOGÍA</li></Link>
                        <Link to="/especialidades#obstetricia"><li>OBSTETRICIA</li></Link>
                        <Link to="/especialidades#endocrinologiaGinecologica"><li>ENDOCRINOLOGÍA GINECOLÓGICA</li></Link>
                    </ul>
                </div>

                <div className='mainLiContainer'>
                    <NavLink to="/servicios" style={{ overflow: 'visible' }} className={({ isActive }) => isActive ? "activeNavLink" : ""}><li className='mainLi' >SERVICIOS</li></NavLink>
                    <ul className='dropdownContainer'>
                        <Link to="/servicios#consultasMedicas"><li>CONSULTAS MÉDICAS</li></Link>
                        <Link to="/servicios#ecografias"><li>ECOGRAFÍAS</li></Link>
                        <Link to="/servicios#procedimientos"><li>PROCEDIMIENTOS</li></Link>
                        <Link to="/servicios#cirugias"><li>CIRUGÍAS</li></Link>
                    </ul>
                </div>
                {/* <Link to="/#sobreNosotros"><li className='mainLi'>SOBRE NOSOTROS<div className='background'></div></li></Link> */}
            </ul>
        </>
    );
}

export default DesktopMenu;

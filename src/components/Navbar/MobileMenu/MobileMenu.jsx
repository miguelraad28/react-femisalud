import { React, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./MobileMenu.scss";
const MobileMenu = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const changeMobileMenuState = () => {
        setMobileMenuOpened(!mobileMenuOpened)
    }

    return (
        <>
            <div className={mobileMenuOpened ? "mobileMenu mobileMenuOpened" : "mobileMenu"} onClick={() => changeMobileMenuState()}>
                <div className='topLine'></div>
                <div className='middleLine'></div>
                <div className='bottomLine'></div>
            </div>
            <div>
                <div id="mobile"className={mobileMenuOpened ? 'showMobileMenuContainer mobileMenuContainer' : "mobileMenuContainer"}>
                    <ul>
                        <div className='mainLiContainer'>

                            <NavLink onClick={() => changeMobileMenuState()} to="/" className={({ isActive }) => isActive ? "activeNavLink" : ""}><li className='mainLi'>INICIO</li></NavLink>
                        </div>
                        <div className='mainLiContainer'>
                            <NavLink onClick={() => changeMobileMenuState()} to="/especialidades" style={{ overflow: 'visible' }} className={({ isActive }) => isActive ? "activeNavLink" : ""}><li className='mainLi' >ESPECIALIDADES</li></NavLink>
                            <ul className='dropdownContainer'>
                                <Link onClick={() => changeMobileMenuState()} to="/especialidades#ginecologia"><li>GINECOLOGÍA</li></Link>
                                <Link onClick={() => changeMobileMenuState()} to="/especialidades#obstetricia"><li>OBSTETRICIA</li></Link>
                                <Link onClick={() => changeMobileMenuState()} to="/especialidades#endocrinologiaGinecologica"><li>ENDOCRINOLOGÍA GINECOLÓGICA</li></Link>
                            </ul>
                        </div>
                        <div className='mainLiContainer'>
                            <NavLink onClick={() => changeMobileMenuState()} to="/servicios" style={{ overflow: 'visible' }} className={({ isActive }) => isActive ? "activeNavLink" : ""}><li className='mainLi' >SERVICIOS</li></NavLink>
                            <ul className='dropdownContainer'>
                                <Link onClick={() => changeMobileMenuState()} to="/servicios#consultasMedicas"><li>CONSULTAS MÉDICAS</li></Link>
                                <Link onClick={() => changeMobileMenuState()} to="/servicios#ecografias"><li>ECOGRAFÍAS</li></Link>
                                <Link onClick={() => changeMobileMenuState()} to="/servicios#procedimientos"><li>PROCEDIMIENTOS</li></Link>
                                <Link onClick={() => changeMobileMenuState()} to="/servicios#cirugias"><li>CIRUGÍAS</li></Link>
                            </ul>
                        </div>
                        {/* <Link to="/#sobreNosotros"><li className='mainLi'>SOBRE NOSOTROS<div className='background'></div></li></Link> */}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
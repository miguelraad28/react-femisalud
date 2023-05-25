import { React, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./MobileMenu.scss";
const MobileMenu = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const changeMobileMenuState = () => {
        setMobileMenuOpened(!mobileMenuOpened)
    }
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    useEffect(() => {
        window.onresize = () => {
            setWindowSize({
                width: window.innerWidth,
            });
        };
        setTimeout(() => {
            if (windowSize.width < 670) {
                const mobile = document.getElementById("mobile")
                if (mobile) {

                    mobile.style.opacity = 1
                    const topLine = document.getElementById("topLine")
                    const middleLine = document.getElementById("middleLine")
                    const bottomLine = document.getElementById("bottomLine")
                    topLine.classList.add("topLineToDefault")
                    middleLine.classList.add("middleLineToDefault")
                    bottomLine.classList.add("bottomLineToDefault")
                }else{
                    setTimeout(() => {
                        mobile.style.opacity = 1
                    const topLine = document.getElementById("topLine")
                    const middleLine = document.getElementById("middleLine")
                    const bottomLine = document.getElementById("bottomLine")
                    topLine.classList.add("topLineToDefault")
                    middleLine.classList.add("middleLineToDefault")
                    bottomLine.classList.add("bottomLineToDefault")
                    }, 500);
                }
            }
        }, 1000);

    }, []);
    return (
        <>
            <div className={mobileMenuOpened ? "mobileMenu mobileMenuOpened" : "mobileMenu"} onClick={() => changeMobileMenuState()}>
                <div id="topLine" className='topLine'></div>
                <div id="middleLine" className='middleLine'></div>
                <div id="bottomLine" className='bottomLine'></div>
            </div>
            <div>
                <div id="mobile" style={{ opacity: 0 }} className={mobileMenuOpened ? 'showMobileMenuContainer mobileMenuContainer' : "mobileMenuContainer"}>
                    <ul>
                        <div className='mainLiContainer'>

                            <NavLink onClick={() => {changeMobileMenuState(); window.scrollTo(0, 0)}} to="/" className={({ isActive }) => isActive ? "activeNavLink" : ""}><li className='mainLi'>INICIO</li></NavLink>
                        </div>
                        <div className='mainLiContainer'>
                            <NavLink onClick={() => {changeMobileMenuState(); window.scrollTo(0, 0)}} to="/especialidades" style={{ overflow: 'visible' }} className={({ isActive }) => isActive ? "activeNavLink" : ""}><li className='mainLi' >ESPECIALIDADES</li></NavLink>
                            <ul className='dropdownContainer'>
                                <Link onClick={() => changeMobileMenuState()} to="/especialidades#ginecologia"><li>GINECOLOGÍA</li></Link>
                                <Link onClick={() => changeMobileMenuState()} to="/especialidades#obstetricia"><li>OBSTETRICIA</li></Link>
                                <Link onClick={() => changeMobileMenuState()} to="/especialidades#endocrinologiaGinecologica"><li>ENDOCRINOLOGÍA GINECOLÓGICA</li></Link>
                            </ul>
                        </div>
                        <div className='mainLiContainer'>
                            <NavLink onClick={() => {changeMobileMenuState(); window.scrollTo(0, 0)}} to="/servicios" style={{ overflow: 'visible' }} className={({ isActive }) => isActive ? "activeNavLink" : ""}><li className='mainLi' >SERVICIOS</li></NavLink>
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

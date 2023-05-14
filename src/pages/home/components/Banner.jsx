import React from 'react';
import "./Banner.scss";
const Banner = () => {
    return (
        <div id="homeSection">
            <div className="homeSectionText">
                <div>
                    <img src="./images/fotodr.png" />
                </div>
                <div>
                    <a href="" className="logoHome"><img src="./images/logohd.png" /></a>
                    <h1 className="montserrat">Dr. Francisco Yaremenko</h1>
                    <p className="montserrat subtitle">Especialista en <strong>Ginecología, Obstetricia</strong></p>
                    <p className="montserrat subtitle">y <strong>Endocrinología Ginecológica</strong></p>
                    <p className="montserrat">Av. Alemania 0999, Oficina 310. Temuco - Chile</p>
                    <a target="_blank" href="https://wa.me/56937117716"><button>
                        <p className="montserrat">¡Agenda tu hora ya!</p>
                    </button></a>
                </div>
            </div>
        </div>
    );
}

export default Banner;

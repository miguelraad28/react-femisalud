import React from 'react';
import "./Banner.scss";
const Banner = () => {
    return (
        <div id="homeSection">
            <div class="homeSectionText">
                <div>
                    <img src="./images/fotodr.png" />
                </div>
                <div>
                    <a href="" class="logoHome"><img src="./images/logohd.png" /></a>
                    <h1 class="montserrat">Dr. Francisco Yaremenko</h1>
                    <p class="montserrat subtitle">Especialista en <strong>Ginecología, Obstetricia</strong></p>
                    <p class="montserrat subtitle">y <strong>Endocrinología Ginecológica</strong></p>
                    <p class="montserrat">Av. Alemania 0999, Oficina 310. Temuco - Chile</p>
                    <a target="_blank" href="https://wa.me/56937117716"><button>
                        <p class="montserrat">¡Agenda tu hora ya!</p>
                    </button></a>
                </div>
            </div>
        </div>
    );
}

export default Banner;

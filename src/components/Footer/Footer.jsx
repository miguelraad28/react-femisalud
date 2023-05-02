import React from 'react';
import BottomDataSection from '../Top&BottomDataSection/BottomDataSection';
import "./Footer.scss"
const Footer = () => {
    return (
        <footer>
            <div className="gridFooter">
                <div className="footerLogoContainer">
                    <img src="images/logohd.png"/>
                </div>
                <div>
                    <p className="drName bradley">Dr. Francisco Yaremenko</p>
                    <p className="specialtiesNames montserrat">GINEGOLOGÍA - OBSTETRICIA</p>
                    <p className="specialtiesNames montserrat">ENDOCRINOLOGÍA GINECOLÓGICA</p>
                </div>
            </div>
            <BottomDataSection/>
        </footer>
    );
}

export default Footer;

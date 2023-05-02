import React from 'react';
import "./Top&BottomDataSection.scss"
const BottomDataSection = () => {
    return (
        <div className="bottomDataSection montserrat">
            <a target="_blank" href="https://wa.me/56937117716">
                <div><img src="./images/circleWhatsappLogo.png" />
                    <p>9 3711 7716</p>
                </div>
            </a>
            <a target="_blank" href="https://goo.gl/maps/6LzzRWWpXyojxy5U6">
                <div><img src="./images/mapLogo.png" />
                    <p>Av. Alemania 0999, Oficina 310. Temuco - Chile</p>
                </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/femisalud.cl/">
                <div><img src="./images/instagramLogo.png" />
                    <p>@femisalud.cl</p>
                </div>
            </a>
            {/* <a target="_blank" href="#">
                <div><img src="./images/facebookLogo.png" />
                    <p>Femisalud Chile</p>
                </div>
            </a> */}
        </div>
    );
}

export default BottomDataSection;

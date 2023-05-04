import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Services.scss";
const Services = () => {
    const location = useLocation();

    useEffect(() => {
        const { hash } = location;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [location]);
    return (
        <div className='servicesPage'>
            <h1 className='montserrat'>FEMISALUD - SERVICIOS</h1>
            <div className='servicesPageContainer'>
                <div className='serviceContent'>
                    <div id="consultasMedicas" className='serviceContent1'>
                        <h2>Consultas médicas</h2>
                    </div>
                    <div id="ecografias" className='serviceContent2'>
                        <h2>Ecografías</h2>
                    </div>
                    <div id="procedimientos" className='serviceContent3'>
                        <h2>Procedimientos</h2>
                    </div>
                    <div id="cirugias" className='serviceContent4'>
                        <h2>Cirugías</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Specialties.scss";
const Specialties = () => {
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
        <div className='specialtiesPage'>
            <h1 className='montserrat'>FEMISALUD - ESPECIALIDADES</h1>
            <div className='specialtiesPageContainer'>
                <div className='specialtyContent'>
                    <div id="ginecologia" className='specialtyContent1'>
                        <h2>Ginecología</h2>
                    </div>
                    <div id="obstetricia" className='specialtyContent2'>
                        <h2>Obstetricia</h2>
                    </div>
                    <div id="endocrinologiaGinecologica" className='specialtyContent3'>
                        <h2>Endocrinología Ginecológica</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specialties;

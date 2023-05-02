import React from 'react';
import "./Home.scss";
import Banner from './components/Banner';
import SpecialtyCard from './components/SpecialtyCard';
import ServiceCard from './components/ServiceCard';
const Home = () => {
    return (
        <>
            <Banner/>
            <div className='specialtiesContainer'>
                <h2 className='montserrat'>ESPECIALIDADES</h2>
                <SpecialtyCard title="GINECOLOGÍA"/>
                <SpecialtyCard title="OBSTETRICIA"/>
                <SpecialtyCard title="ENDOCRINOLOGÍA GINECOLÓGICA"/>
            </div>
            <div className='servicesContainer'>
                <ServiceCard/>
            </div>
        </>
    );
}

export default Home;

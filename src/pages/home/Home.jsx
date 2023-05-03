import React from 'react';
import "./Home.scss";
import Banner from './components/Banner';
import SpecialtyCard from './components/SpecialtyCard';
import ServiceCard from './components/ServiceCard';
const Home = () => {
    return (
        <>
            <Banner />
            <div className='specialtiesContainer'>
                <h2 className='montserrat'>ESPECIALIDADES</h2>
                <SpecialtyCard title="GINECOLOGÍA" />
                <SpecialtyCard title="OBSTETRICIA" />
                <SpecialtyCard title="ENDOCRINOLOGÍA GINECOLÓGICA" />
            </div>
            <div className='servicesContainer'>
                <h2 className='montserrat'>SERVICIOS</h2>
                <div className='servicesGridContainer'>
                    <ServiceCard title="CONSULTAS MÉDICAS" link="#consultasMedicas" items={["hoji2hjokljl", "jpojojpo", "oipojoijoij"]}/>
                    <ServiceCard title="ECOGRAFÍAS" link="#ecografias" items={["hoji2hjokljl", "jpojojpo", "oipojoijoij"]}/>
                    <ServiceCard title="PROCEDIMIENTOS" link="#procedimientos" items={["hoji2hjokljl", "jpojojpo", "oipojoijoij"]}/>
                    <ServiceCard title="CIRUGÍAS" link="#cirugias" items={["hoji2hjokljl", "jpojojpo", "oipojoijoij"]}/>
                </div>
            </div>
        </>
    );
}

export default Home;

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
                <SpecialtyCard title="GINECOLOGÍA" description="La ginecología es una especialidad médica que se enfoca en el cuidado de la salud de la mujer, especialmente en lo que respecta al sistema reproductivo femenino. Los ginecólogos son expertos en el diagnóstico, tratamiento y prevención de enfermedades y trastornos ginecológicos. Brindan atención integral a mujeres de todas las edades, desde la adolescencia hasta la menopausia y más allá. Los servicios de ginecología incluyen exámenes de rutina, detección y tratamiento de enfermedades, manejo de trastornos hormonales, atención prenatal y postnatal, así como asesoramiento en anticoncepción y salud sexual." />
                <SpecialtyCard title="OBSTETRICIA" description="La obstetricia se enfoca en la atención médica de la mujer durante el embarazo, el parto y el período postparto. Los obstetras brindan un cuidado completo y personalizado a las mujeres embarazadas y a sus bebés en desarrollo. Su objetivo principal es garantizar un embarazo saludable, un parto seguro y una recuperación óptima después del nacimiento. Los servicios obstétricos incluyen visitas prenatales, monitoreo fetal, asesoramiento sobre nutrición y ejercicio durante el embarazo, manejo del dolor durante el parto, asistencia en el parto vaginal o cesárea, y seguimiento postnatal para garantizar la salud de la madre y el bebé." />
                <SpecialtyCard title="ENDOCRINOLOGÍA GINECOLÓGICA" description="La endocrinología ginecológica se centra en el estudio y manejo de los trastornos hormonales específicos de las mujeres. Los endocrinólogos ginecológicos son especialistas en el diagnóstico y tratamiento de trastornos hormonales que afectan el sistema reproductivo femenino, como el síndrome de ovario poliquístico (SOP), trastornos de la tiroides, trastornos del ciclo menstrual, infertilidad y menopausia. Estos especialistas trabajan en estrecha colaboración con otros profesionales de la salud para brindar un enfoque integral y personalizado en el tratamiento de los desequilibrios hormonales, ayudando a mejorar la calidad de vida de las pacientes y a abordar los problemas de fertilidad y reproducción." />
            </div>
            <div className='servicesContainer'>
                <h2 className='montserrat'>SERVICIOS</h2>
                <div className='servicesGridContainer'>
                    <ServiceCard title="CONSULTAS MÉDICAS" link="#consultasMedicas" items={["PRESENCIALES", "TELECONSULTAS"]} />
                    <ServiceCard title="ECOGRAFÍAS" link="#ecografias" items={["ECOGRAFÍAS 2D", "ECOGRAFÍAS 3D", "ECOGRAFÍAS 5D LIVE", "GINECOLÓGICAS", "OBSTÉTRICAS"]} />
                    <ServiceCard title="PROCEDIMIENTOS" link="#procedimientos" items={["PAP (CITOLOGÍAS)", "BIOPSIAS GINECOLÓGICAS"]} />
                    <ServiceCard title="CIRUGÍAS" link="#cirugias" items={["PARTOS", "CESÁREAS", "GINECOLÓGICAS"]} />
                </div>
            </div>
        </>
    );
}

export default Home;

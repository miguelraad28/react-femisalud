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
                <div className='servicesContent'>
                    <div id="consultasMedicas" className='serviceContent'>
                        <h2>Consultas médicas</h2>
                        Las consultas médicas son una parte fundamental del cuidado de la salud. En nuestra clínica, ofrecemos consultas médicas en <strong>ginecología, obstetricia y endocrinología ginecológica.</strong>
                        <ul>
                            <li><strong>Ginecológicas:</strong> Ofrecemos consultas médicas personalizadas para abordar las necesidades específicas de la salud femenina. Realizamos evaluaciones integrales, brindamos asesoramiento experto y ofrecemos soluciones adaptadas a cada paciente. Ya sea que necesites exámenes de rutina, evaluación y tratamiento de problemas ginecológicos, manejo de trastornos hormonales o asesoramiento en anticoncepción, estamos aquí para cuidar de tu bienestar.
                            </li>
                            <li><strong>Obstétricas:</strong> Durante el embarazo, es fundamental contar con una atención obstétrica de calidad para garantizar la salud tanto de la madre como del bebé. Ofrecemos consultas médicas especializadas, seguimiento prenatal y monitoreo regular para asegurar un embarazo saludable. Brindamos apoyo y orientación en cada etapa del embarazo, respondiendo a tus inquietudes y garantizando el mejor cuidado para ti y tu bebé.</li>

                            <li><strong>Endocrino ginecológicas:</strong> Si estás experimentando desequilibrios hormonales que afectan tu salud y bienestar, podemos ayudarte. Mediante consultas médicas exhaustivas, evaluamos tus síntomas, realizamos pruebas diagnósticas y creamos un plan de tratamiento personalizado para abordar trastornos hormonales específicos de las mujeres, como el síndrome de ovario poliquístico, trastornos tiroideos, trastornos del ciclo menstrual y más.</li>
                        </ul>
                    </div>
                    <div id="ecografias" className='serviceContent'>

                        <h2>Ecografías</h2>
                        Las ecografías son una herramienta importante en la evaluación de la salud ginecológica y obstétrica.
                        Realizamos una variedad de ecografías especializadas tanto en el ámbito ginecológico como obstétrico para brindarte información detallada sobre tu salud reproductiva y el desarrollo de tu bebé durante el embarazo. Utilizamos tecnología de vanguardia para realizar <strong>ecografías 2D, 3D y 5D Live</strong>, lo que nos permite obtener imágenes claras y precisas. Ya sea que necesites una ecografía ginecológica de diagnóstico o desees presenciar el vínculo emocional con tu bebé a través de una ecografía obstétrica, estamos aquí para ofrecerte una experiencia cómoda y segura.
                    </div>
                    <div id="procedimientos" className='serviceContent'>
                        <h2>Procedimientos</h2>
                        En nuestra clínica, ofrecemos varios <strong>procedimientos</strong> ginecológicos para diagnosticar o tratar enfermedades y trastornos ginecológicos.
                        <ul>
                            <li>
                                <strong>Papanicolaou (PAP):</strong> El Papanicolaou es una prueba de detección que se utiliza para detectar cambios anormales en las células cervicales que podrían indicar la presencia de cáncer cervical. Realizamos el PAP de manera profesional y confidencial, brindándote tranquilidad y asegurando una atención de calidad en la detección temprana de posibles problemas cervicales.</li>
                            <li>
                                <strong>Biopsias Ginecológicas:</strong> En casos en los que se detecten anormalidades durante exámenes ginecológicos o pruebas de diagnóstico, se puede requerir una biopsia ginecológica. Este procedimiento nos permite obtener muestras de tejido para su análisis y determinar la presencia de enfermedades o trastornos.</li>
                        </ul>
                    </div>
                    <div id="cirugias" className='serviceContent'>
                        <h2>Cirugías</h2>
                        En nuestra clínica, ofrecemos <strong>cirugías ginecológicas y obstétricas</strong> para tratar una amplia variedad de problemas de salud. Realizamos <strong>partos</strong> y <strong>cesáreas</strong> para garantizar un parto seguro y saludable tanto para la madre como para el bebé. También realizamos <strong>cirugías ginecológicas</strong>, como histerectomías, cirugías de quistes ováricos y cirugías para tratar la endometriosis. Estamos altamente capacitados y utilizamos tecnología avanzada para garantizar la seguridad y el bienestar de nuestros pacientes durante todo el proceso quirúrgico.
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Services;

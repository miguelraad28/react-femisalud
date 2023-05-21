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
                        <p>La consulta de ginecología preventiva debe realizarse regularmente por todas las mujeres al menos una vez al año para evaluar su estado de salud general y la de los órganos femeninos. Según corresponda, se practica examen físico general, mamario y genital, incluso al interior, mediante ecotomografía para evaluar al útero, endometrio, trompas, ovarios y pelvis femenina. En una misma visita además de la ecografía, también puede practicarse el Papanicolao (PAP) o citología de cuello uterino para el estudio de infecciones por virus de papiloma humano (HPV) y cáncer de cuello.

                        </p>
                    </div>
                    <div id="obstetricia" className='specialtyContent2'>
                        <h2>Obstetricia</h2>
                        <p>
                            La consulta obstétrica está dirigida al control de la embarazada, donde el especialista investiga tanto la salud de la madre como la del bebé. Durante la consulta, la embarazada aclara sus dudas e inquietudes, recibe orientación general sobre el embarazo, vacunas, alimentación, exámenes complementarios, interconsultas pertinentes para su atención por otros especialistas del área de la salud. Incluso en la misma visita, también puede practicarse la ecografía prenatal con diferentes propósitos: calcular la edad del embarazo, el riesgo y diagnóstico de algunas malformaciones, de parto prematuro (antes de las 37 semanas), preeclampsia (presión elevada), Doppler de las 11-13,6 semanas, ecografía morfológica, de crecimiento fetal, 3D y 5DLive.
                        </p>
                    </div>
                    <div id="endocrinologiaGinecologica" className='specialtyContent3'>
                        <h2>Endocrinología Ginecológica</h2>
                        <p>La endocrinología ginecológica es una subespecialidad de la ginecología que se encarga del estudio y tratamiento de los trastornos hormonales propios de la mujer en diferentes etapas de la vida, como la menopausia, o en la edad reproductiva trastornos del ciclo menstrual, la fertilidad, ovarios poliquísticos, hiperandrogenismo: acné, hirsutismo o exceso de vellos y/o de grasa (seborrea), y otras alteraciones endocrinas (como de la prolactina, tiroides) y metabólicas (insulina, glicemia) que afectan a la mujer y las funciones del sistema ginecológico.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specialties;

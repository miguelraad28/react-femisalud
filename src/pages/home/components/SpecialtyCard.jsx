import React from 'react';
import "./SpecialtyCard.scss";
const SpecialtyCard = (props) => {
    return (
        <div className='specialtyCard'>
            <div className='specialtyImage'>
                <img src='./images/cirugias.jpg'/>
                <h3 className='montserrat'>{props.title}</h3>
            </div>
            <div className='specialtyData'>
                {props.description}
            </div>
        </div>
    );
}

export default SpecialtyCard;

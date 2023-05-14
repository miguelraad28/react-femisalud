import React from 'react';
import { Link } from 'react-router-dom';
import "./SpecialtyCard.scss";
const SpecialtyCard = (props) => {
    return (
        <div className='specialtyCard'>
            <div className='specialtyImage'>
                <img src={props.img}/>
                <Link to={`/especialidades${props.link}`}><h3 className='montserrat'>{props.title}<i className="bi bi-box-arrow-up-right"></i></h3></Link>
            </div>
            <div className='specialtyData'>
                {props.description}
            </div>
        </div>
    );
}

export default SpecialtyCard;

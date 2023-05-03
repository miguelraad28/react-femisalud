import React from 'react';
import { Link } from 'react-router-dom';
import "./ServiceCard.scss";
const ServiceCard = (props) => {
    return (
        <div className='serviceCard'>
            <div className='serviceImage'>
                <img src='./images/cirugias.jpg'/>
                <h3 className='montserrat'>{props.title}</h3>
            </div>
            <div className='serviceData'>
                <ul>
                    {props.items.map(item =>
                        <li>{item}</li>
                    )}
                </ul>
            </div>
            <div className='seeMoreLinkContainer'>
            <Link className='montserrat' to={`/servicios${props.link}`}><p>VER MÁS</p></Link>
            </div>
        </div>
    );
}

export default ServiceCard;

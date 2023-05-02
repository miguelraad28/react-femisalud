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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste sunt excepturi, aperiam nemo, nesciunt temporibus dolore impedit similique distinctio, nam saepe est accusamus delectus explicabo ea assumenda voluptates. Reiciendis dicta veniam eius. Deleniti neque animi doloremque modi assumenda totam magni iure veniam minus! Atque magni, commodi enim porro officiis ullam dolorem cupiditate, iure et facilis totam repudiandae cum est inventore voluptas. Deserunt tenetur rerum illum culpa recusandae sit cum molestiae, voluptatibus facere nemo. Commodi quidem fugit aspernatur ex nam sunt error ullam quod perspiciatis sint? Aperiam tempora officiis saepe modi eaque id porro ut, tenetur quia recusandae nam ducimus!
            </div>
        </div>
    );
}

export default SpecialtyCard;

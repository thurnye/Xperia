import React from 'react';
import './avatar.css'
import Avatar from '../../Public/Image/avatar.png'
const avatar = () => {
    return (
        <div className=" user-image">
            <img src={Avatar} class="img-avatar" alt="..."/>
        </div>
    );
}

export default avatar;

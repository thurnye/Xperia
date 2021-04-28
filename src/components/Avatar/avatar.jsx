import React from 'react';
import './avatar.css'
import Avatar from '../../Public/Image/avatar.png'
import {Link } from 'react-router-dom';




const avatar = (props) => {
    // console.log(props.author._id)

    return (
        <div className=" user-image">
            {props.author ?  
            <Link to={{
                pathname: `/account/author/${props.author._id}` ,
                search: `?author=${props.author.name}`,
                state: `${props.author._id}`,
                hash: props.author._id,
            }}>
                <img src={Avatar} className="img-avatar" alt="..."/>
            </Link>
            
            :  '' }
            {/* :  <img src={Avatar} className="img-avatar" alt="..."/> } */}
        </div>
    );
}

export default avatar;

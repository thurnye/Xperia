import React from 'react';
import Avatar from '../../Public/Image/avatar.png'
import {Link } from 'react-router-dom';
import SocialMedia from '../SocialMedia/socialMedia'
import sales from '../../Public/Image/sales.jpeg'
import services from '../util/services'
import './expInfo.css'


// get the author info here

const ExpInfo = (props) => {
    
    // console.log(props.author)
    
    return (
        <React.Fragment>
            
            <div className="expInfo container">
                <div className="expInfo-img">
                    {/* <Avatar author={props.author}/> */}
                    <Link to={{
                        pathname: `/account/author/${props.author._id}` ,
                        search: `?author=${props.author.name}`,
                        state: {authorId: props.author._id},
                        hash: props.author._id,
                        }}>
                        <img src={Avatar} className="img-avatar" alt="..."/>
                    </Link>

                </div>
                <div className="googleMap">
                <h6><span className="text-muted">Where We Are</span></h6>
                    <div className="googleMapOfLocation">

                    This will be the google map pointing to the location of the placce
                    </div>
                </div>
                <div className="expoInfo-media">
                    <SocialMedia author={props.author}/>
                </div>
                <div className="sales">
                    <a href="https://simpleton-app.herokuapp.com/" target="_blank"><img src={sales} alt="" style={{width: '100%'}}/> </a>
                </div>
                <div className="container">
                    <div className="newsletter">
                        <h6><span className="text-muted">News Letter</span></h6>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email address" style={{height: '60px'}}/>
                            </div>
                            <div className="mb-3">
                            <input type="button" className="form-control  btn-dark" id="exampleFormControlInput1" placeholder="name@example.com" value="SUBSCRIBE"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default ExpInfo;

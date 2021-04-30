import React from 'react';
import Avatar from '../../Public/Image/avatar.png'
import {Link } from 'react-router-dom';
// import SocialMedia from '../SocialMedia/socialMedia'
import sales from '../../Public/Image/sales.jpeg'
import services from '../util/services'
import './expInfo.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



// get the author info here

const ExpInfo = (props) => {
    
    const author = props.author
    
    return (
        <React.Fragment>
        {/* {props.author.socialMedia ? <h1>yes</h1> : <h1>loading</h1>} */}
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
                        {/* <SocialMedia author={props.author}/> */}

                        <div className="container col-md-4 media-icon">
                    <h6><span className="text-muted">Follow Us</span></h6>
                    <div className="follow-up " style={{height: '20vh'}}> 
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <a href='' className="icon">
                                        <FontAwesomeIcon icon={['fab', 'facebook']} />                                   
                                    </a>
                                </div>
                                <div className="col">
                                    <a href='' className="icon"> 
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />  
                                    </a>
                                </div>
                                <div className="col">
                                    <a href='' className="icon"> 
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />  
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href='' className="icon"> 
                                        <FontAwesomeIcon icon={['fab', 'pinterest']} />  
                                    </a>
                                </div>
                                <div className="col">
                                    <a href='' className="icon"> 
                                        <FontAwesomeIcon icon={['fab', 'youtube']} />  
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
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
        </React.Fragment>
    );
}

export default ExpInfo;

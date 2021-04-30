import React from 'react';
import {Link } from 'react-router-dom';
import './myInfo.css'
import Avatar from '../../Public/Image/avatar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const myInfo = (props) => {
    const user = props.loggedInUser
    // console.log(user)
    return (
        <React.Fragment>
            {user ?
                <React.Fragment>
                    <div className="user-header container">
                        <div className=" user-nickname">
                            <div className="user-title">
                                <h4>{props.loggedInUser.name}</h4>
                                <p><small className="text-mute">@{props.loggedInUser.username}</small></p>
                            </div>
                            <div className="user-slogan ">
                                <p><i>{props.loggedInUser.slogan}</i></p>
                            </div>
                        </div>
                        <div className=" user-image">
                            <img src={Avatar} className="img-avatar" alt="..."/>
                        </div>
                    </div>
                    <div className=" user-intro">
                        <div className="container">
                            <p>{props.loggedInUser.aboutMe}</p>
                        </div>
                    </div>
                    <div className=" user-media">
                        <div className="container">
                            <div className="row g-0 justify-content-md-center">
                                <div class="col col-lg-2">
                                    <a href={props.loggedInUser.socialMedia[0].facebook} className="icon">
                                    <FontAwesomeIcon icon={['fab', 'facebook']} />                                   
                                    </a>
                                </div>
                                <div class="col col-lg-2">
                                    <a href={props.loggedInUser.socialMedia[0].instagram} className="icon">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} />                                   
                                    </a>
                                </div>
                                <div class="col col-lg-2">
                                    <a href={props.loggedInUser.socialMedia[0].twitter} className="icon">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />                                    
                                    </a>
                                </div>
                                <div class="col col-lg-2">
                                    <a href={props.loggedInUser.socialMedia[0].pinterest} className="icon">
                                    <FontAwesomeIcon icon={['fab', 'pinterest']} />                                   
                                    </a>
                                </div>
                                <div class="col col-lg-2">
                                    <a href={props.loggedInUser.socialMedia[0].youtube} className="icon">
                                    <FontAwesomeIcon icon={['fab', 'youtube']} />                                    
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="settings">
                        <Link to={{pathname: `/settings`}}className="btn explore"><i className="fas fa-cogs"></i>settings</Link>
                    </div>
                </React.Fragment>
                : <h1>Loading...</h1>
            }
        </React.Fragment>
    );
}

export default myInfo;

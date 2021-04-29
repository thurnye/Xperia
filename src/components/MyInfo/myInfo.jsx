import React from 'react';
import {Link } from 'react-router-dom';
import './myInfo.css'
import Avatar from '../../Public/Image/avatar.png'


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
                                    <span className="icon">{props.loggedInUser.socialMedia[0].facebook}</span>
                                </div>
                                <div class="col col-lg-2">
                                    <span className="icon">{props.loggedInUser.socialMedia[0].instagram}</span>
                                </div>
                                <div class="col col-lg-2">
                                    <span className="icon">{props.loggedInUser.socialMedia[0].twitter}</span>
                                </div>
                                <div class="col col-lg-2">
                                    <span className="icon">{props.loggedInUser.socialMedia[0].pinterest}</span>
                                </div>
                                <div class="col col-lg-2">
                                    <span className="icon">{props.loggedInUser.socialMedia[0].youtube}</span>
                                </div>
                                <div class="col col-lg-2">
                                    <span className="icon">{props.loggedInUser.socialMedia[0].rss}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="settings">
                        <Link to={{pathname: `/settings`}}className="btn explore">Settings</Link>
                    </div>
                </React.Fragment>
                : <h1>Loading...</h1>
            }
        </React.Fragment>
    );
}

export default myInfo;

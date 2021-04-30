import React from 'react';
import './social.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialMedia = (props) => {
    console.log(props.author)
    return (
        <React.Fragment> 
            {props.author ? 
            <div className="container col-md-4 media-icon">
                <h6><span className="text-muted">Follow Us</span></h6>
                <div className="follow-up " style={{height: '20vh'}}> 
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <a href={props.author.socialMedia[0].facebook} className="icon">
                                        <FontAwesomeIcon icon={['fab', 'facebook']} />                                   
                                        </a>
                            </div>
                            <div className="col">
                                <span className="icon">icon</span>
                                <p><small className="text-mute" style={{fontSize: "10px"}}>FACEBOOK</small></p>
                            </div>
                            <div className="col">
                                <span className="icon">icon</span>
                                <p><small className="text-mute" style={{fontSize: "10px"}}>TWITTER</small></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span className="icon">icon</span>
                                <p><small className="text-mute" style={{fontSize: "10px"}}>PINTEREST</small></p>
                            </div>
                            <div className="col">
                                <span className="icon">icon</span>
                                <p><small className="text-mute" style={{fontSize: "10px"}}>YOUTUBE</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                    
                    </div>
            : ''}
        </React.Fragment>
    );
}

export default socialMedia;

import React from 'react';
import './social.css'

const socialMedia = () => {
    return (
        <div className="container col-md-4 media-icon">
            <h6><span className="text-muted">Follow Us</span></h6>
            <div className="follow-up " style={{height: '20vh'}}> 
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <span className="icon">icon</span>
                            <p><small className="text-mute" style={{fontSize: "10px"}}>INSTAGRAM</small></p>
                        </div>
                        <div class="col">
                            <span className="icon">icon</span>
                            <p><small className="text-mute" style={{fontSize: "10px"}}>FACEBOOK</small></p>
                        </div>
                        <div class="col">
                            <span className="icon">icon</span>
                            <p><small className="text-mute" style={{fontSize: "10px"}}>TWITTER</small></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <span className="icon">icon</span>
                            <p><small className="text-mute" style={{fontSize: "10px"}}>PINTEREST</small></p>
                        </div>
                        <div class="col">
                            <span className="icon">icon</span>
                            <p><small className="text-mute" style={{fontSize: "10px"}}>YOUTUBE</small></p>
                        </div>
                        <div class="col">
                            <span className="icon">icon</span>
                            <p><small className="text-mute" style={{fontSize: "10px"}}>RSS</small></p>
                        </div>
                    </div>
                </div>
            </div>
                
                </div>
    );
}

export default socialMedia;

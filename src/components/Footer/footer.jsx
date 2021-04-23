import React from 'react';
import './footer.css'

const footer = () => {
    return (
        <React.Fragment>
            <div className="footer-elements row">
                <div className="col-md-4 "> 
                    <div className="container component">
                        GoogleMap
                    </div>
                    
                </div>
                <div className="container col-md-4 media-icon">
                <div className="follow-up"> 
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
                
                <div className="col-md-4">
                    <div className="newsletter">
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email address" />
                        </div>
                        <div class="mb-3">
                        <input type="button" class="form-control  btn-dark" id="exampleFormControlInput1" placeholder="name@example.com" value="SUBSCRIBE"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default footer;

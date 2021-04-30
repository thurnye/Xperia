import React from 'react';
import SocialMedia from '../SocialMedia/socialMedia'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import world from '../../Public/Image/continent.png'

const footer = () => {
    return (
        <React.Fragment>
            <div className="footer-elements row">
                <div className="col-md-4 "> 
                <h6><span className="text-muted">Where we are</span></h6>
                <div className="container">
                    <div className="googleMapOfLocation" style={{height: '20vh'}}>
                        <img src={world} alt="" srcset=""/>
                    </div>
                </div>
                    
                </div>
                <SocialMedia/>
                
                <div className="col-md-4">
                    <h6><span className="text-muted">News Letter</span></h6>
                    <div className="newsletter" style={{height: '20vh', marginTop: '6vh'}}>
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

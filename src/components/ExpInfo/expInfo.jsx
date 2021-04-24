import React from 'react';
import Avatar from '../Avatar/avatar'
import SocialMedia from '../SocialMedia/socialMedia'
import sales from '../../Public/Image/sales.jpeg'
import './expInfo.css'



const expInfo = () => {
    return (
        <React.Fragment>
            <div className="expInfo container">
                <div className="expInfo-img">
                    <Avatar />
                </div>
                <div className="googleMap">
                <h6><span className="text-muted">Where We Are</span></h6>
                    <div className="googleMapOfLocation">

                    This will be the google map pointing to the location of the placce
                    </div>
                </div>
                <div className="expoInfo-media">
                    <SocialMedia/>
                </div>
                <div className="sales">
                    <a href="https://simpleton-app.herokuapp.com/" target="_blank"><img src={sales} alt="" srcset="" style={{width: '100%'}}/> </a>
                </div>
                <div className="container">
                    <div className="newsletter">
                        <h6><span className="text-muted">News Letter</span></h6>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email address" style={{height: '60px'}}/>
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

export default expInfo;

import React from 'react';
import './profileHalf.css'
import Avatar from '../Avatar/avatar' 
const profileHalf = () => {
    return (
        <React.Fragment>
            This is the left half of the profile
            <div className="user-header container">
                <div className=" user-nickname">
                    <div className="user-title">
                        <h4>DON WALKER</h4>
                        <p><small className="text-mute">@WorldSeeker</small></p>
                    </div>
                    <div className="user-slogan ">
                        <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ducimus!</i></p>
                    </div>
                </div>
                <Avatar/>
            </div>
            <div className=" user-intro">
                <div className="container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit maiores aspernatur, quis cupiditate debitis veniam voluptates nam sapiente reiciendis!</p>
                </div>
            </div>
            <div className=" user-media">
                <div className="container">
                    <div className="row g-0 justify-content-md-center">
                        <div class="col col-lg-2">
                            <span className="icon">icon</span>
                        </div>
                        <div class="col col-lg-2">
                            <span className="icon">icon</span>
                        </div>
                        <div class="col col-lg-2">
                            <span className="icon">icon</span>
                        </div>
                        <div class="col col-lg-2">
                            <span className="icon">icon</span>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default profileHalf;

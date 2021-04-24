import React from 'react';
import NavBar from '../../components/Nav/navbar';
import Experience from '../../components/Experience/experience'
import ExpInfo from '../../components/ExpInfo/expInfo'
import './single.css'
const singleExperience = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <h2>Xperia</h2>
            <p><small className="text-mute">User Slogan</small></p>
            <div className="container">
            <div class=" mb-3" >
                <div class="row">
                    <div class="col-md-8 container ">
                        <Experience/>
                    </div>
                    <div class="col-md-4 ">
                        <ExpInfo/>
                    </div>
                </div>
            </div>
            </div>
            <div className="foot components">
                <div className="right-reserved">
                    <p className="text-muted">&copy;2021 Tamunotonye Daniel, All Right Reserved</p>
                </div>
        </div>
         
        </React.Fragment>
    );
}

export default singleExperience;

import React from 'react';
import NavBar from '../../components/Nav/navbar';
import './profile.css'
import UserInfo from '../../components/ProfileHalf/profileHalf'
import UserContents from '../../components/UserContents/userXperience'
import Footer from '../../components/Footer/footer'
const profile = () => {
    return (
        <React.Fragment>
            <NavBar/>
            
            <div className="container">
            <div class="card mb-3" >
                <div class="row">
                    <div class="col-md-4 container userInfo">
                        <UserInfo/>
                    </div>
                    <div class="col-md-8 components">
                        <UserContents/>
                    </div>
                </div>
            </div>
            </div>
           
         
        </React.Fragment>
    );
}

export default profile;

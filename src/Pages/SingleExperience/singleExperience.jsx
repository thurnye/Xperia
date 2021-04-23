import React from 'react';
import NavBar from '../../components/Nav/navbar';

const singleExperience = () => {
    return (
        <React.Fragment>
            <NavBar/>
            
            <div className="container">
            <div class="card mb-3" >
                <div class="row">
                    <div class="col-md-8 container ">
                        Experience Page
                    </div>
                    <div class="col-md-4 components">
                        UserInfo Page
                    </div>
                </div>
            </div>
            </div>
           
         
        </React.Fragment>
    );
}

export default singleExperience;

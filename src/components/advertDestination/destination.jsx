import React from 'react';
import PeruImg from '../../Public/Image/destination-peru-single1.jpeg'
import './destination.css'

const destination = () => {
    return (
        <div className="container destination">
            <div className="row">
                <div class="col-md-4 destination-list">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={PeruImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">country name</h5>
                            <p class="card-text">what they are known for</p>
                            <a href="#" class="btn explore">EXPLORE</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 destination-list">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={PeruImg} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">country name</h5>
                        <p class="card-text">what they are known for</p>
                        <a href="#" class="btn explore">EXPLORE</a>
                    </div>
                    </div>
                </div>

                <div class="col-md-4 destination-list">
                    <div class="card" style={{width: '18rem'}}>
                    <img src={PeruImg} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">country name</h5>
                        <p class="card-text">what they are known for</p>
                        <a href="#" class="btn explore">EXPLORE</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default destination;

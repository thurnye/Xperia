import React from 'react';
import PeruImg from '../../Public/Image/destination-peru-single1.jpeg'
import Peru2 from '../../Public/Image/peru2.jpeg'
import Peru3 from '../../Public/Image/peru3.jpeg'
// import PeruMap from '../../Public/Image/peruMap.png'
// import SwedenMap from '../../Public/Image/swedenMap.png'
import './destination.css'

const destination = () => {
    return (
        <div className="container destination">
            <div className="row">
                <div class="col-md-4 destination-list">
                    <div class="card" style={{width: '16rem'}}>
                        <img src={PeruImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Peru</h5>
                            <div className="countryMap component">....map of the country goes here</div>
                            <p class="card-text"><small className="text-muted"><i>Dog Friendly, Low Budget, Adventure</i></small></p>
                            <a href="#" class="btn explore">EXPLORE</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 destination-list">
                    <div class="card" style={{width: '16rem'}}>
                        <img src={Peru2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Sweden</h5>
                        <div className="countryMap component">....map of the country goes here</div>
                        <p class="card-text"><small className="text-muted"><i>Beaches, Low Budget, Adventure</i></small></p>
                        <a href="#" class="btn explore">EXPLORE</a>
                    </div>
                    </div>
                </div>

                <div class="col-md-4 destination-list">
                    <div class="card" style={{width: '16rem'}}>
                    <img src={Peru3} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Columbia</h5>
                        <div className="countryMap component">....map of the country goes here</div>
                        <p class="card-text"><small className="text-muted"><i>Beaches, NightLife</i></small></p>
                        <a href="#" class="btn explore">EXPLORE</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default destination;

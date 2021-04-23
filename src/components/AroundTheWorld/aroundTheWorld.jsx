import React from 'react';
import './around.css'
import Preview from '../../Public/Image/preview.jpeg'
import Beach from '../../Public/Image/beach.jpeg'
import abouticon from '../../Public/Image/about-icon-1.png'

const aroundTheWorld = () => {
    return (
        <div className="aroundTheWorld">
            <div class=" mb-3">
                    <div class="row g-0">
                        <div class="col-md-6 aroundTheWorld-part-1">
                            <div className="container">
                                <div className="around-head">
                                    <h4>TRAVEL AROUND THE WORLD IN 10 DAYS</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span style={{textDecoration:"underline"}}>Fugit error nulla omnis adipisci </span>aperiam iste impedit magnam. Ratione officia cum sed, vel molestiae in exercitationem mollitia eos. Ex aperiam debitis, <span style={{textDecoration:"underline"}}>tempora aut recusandae rem minima</span> dignissimos magni provident laboriosam ratione, molestias illo odit facilis voluptatem.</p>

                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione iste a ab facere repellendus <span style={{textDecoration:"underline"}}>odio sed tempore non culpa.</span></p>
                                </div>
                                <div className="colors">
                                    <span class="dot" style={{background:"#3b5998"}}></span>
                                    <span class="dot"style={{background:"#cb2027"}}></span>
                                    <span class="dot"style={{background:"#55acee"}}></span>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 second-part aroundTheWorld-part-2">
                            <div className="container">
                                <div className="around-img1">
                                    <img src={Beach} alt="" srcset="" style={{width:"300px"}}/>
                                </div>
                                <div className="around-img2">
                                    <img src={Preview} alt="" srcset="" style={{width:"200px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default aroundTheWorld;

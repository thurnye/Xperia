import React from 'react';
import './essentials.css'
import Bag from '../../Public/Image/bag.png'
import shoe from '../../Public/Image/shoe.png'
import cam from '../../Public/Image/cam.png'
import box from '../../Public/Image/box.png'
import glasses from '../../Public/Image/glasses.png'



const essentials = () => {
    return (
        <div className="essentials">
            <div className="container">
                    <div className="essentials-head">
                        <h5>MY TRAVEL ESSENTIALS</h5>
                        <p> A useful travel essentials you should add to our packing list</p>
                    </div>
            </div>
            <div className="container essential-items">
            <div class=" row mb-3" >
                <div class="essential-item-list">
                    <img src={Bag} alt="" srcset=""/>
                    
                </div>
                <div class="essential-item-list">
                    <img src={shoe} alt="" srcset=""/>
                    
                </div>
                <div class="essential-item-list">
                    <img src={cam} alt="" srcset=""/>
                    
                </div>
                <div class="essential-item-list">
                    <img src={box} alt="" srcset=""/>
                    
                </div>
                <div class="essential-item-list">
                    <img src={glasses} alt="" srcset=""/>
                    
                </div>
                </div>
            </div>
        </div>
    );
}

export default essentials;

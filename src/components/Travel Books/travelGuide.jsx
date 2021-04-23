import React from 'react';
import './guide.css'
import Book from '../../Public/Image/book.png'
import OwlCarousel from 'react-owl-carousel';



const travelGuide = () => {
    return (
        <React.Fragment> 
        <div className='guide'>
            <div class="container">
                <div class="">
                    <OwlCarousel className='owl-theme owl' loop margin={10} nav={false}>
                        <div class='item'>
                            <img src={Book} alt="..." className="card-img" style={{}}/>
                        </div>
                        <div class='item'>
                            <img src={Book} alt="..." className="card-img" style={{}}/>
                        </div>
                        <div class='item'>
                            <img src={Book} alt="..." className="card-img" style={{}}/>
                        </div>
                        <div class='item'>
                            <img src={Book} alt="..." className="card-img" style={{}}/>
                        </div>
                        
                    </OwlCarousel>
                </div>
            </div>
        </div>

        

        </React.Fragment>
        
    );
}

export default travelGuide;

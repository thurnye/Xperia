import React from 'react';
import './home.css'
import Destination from '../../components/advertDestination/destination'
import TravelGuide from '../../components/Travel Books/travelGuide'
import PreviewStories from '../../components/RecentStoriesPreview/recentStoriesPreview'
import GoogleMap from '../../components/GoogleMap/googleMap'
import AroundTheWorld from '../../components/AroundTheWorld/aroundTheWorld'
import TravelEssentials from '../../components/TravelEssentials/essentials'
import Footer from '../../components/Footer/footer'
import jumbotronbckgrd from '../../Public/Image/jumbotron.jpeg'

const home = () => {
    return (
        <React.Fragment>
            <div className="home"> 
            <div class="jumbotron jumbotron-fluid" >
                <div class="container">
                    <h3 class="">Your Trip Starts Here!</h3>
                    <p class="lead"><small><i>what have we to say about your next big trip...</i></small></p>
                </div>
            </div>  
           
        <div className="component">
            <Destination/>
        </div>
        <div className="component">
            {/* Travel guide Page */}
            <TravelGuide />
        </div>
        <div className="component">
            {/* ReCent Stories Preview */}
            <PreviewStories/>
        </div>
        <div className="component">
            {/* Huge Map of the world */}
            {/* <GoogleMap/> */}
        </div>
        <div className="component">
            {/* Around the world in 10 days */}
            <AroundTheWorld/>
        </div>
        
        <div className="component">
            {/* Essential Travels */}
            <TravelEssentials/>
        </div>
        <div className="component">
            {/* Footer */}
            <Footer/>
        </div>
        </div>
        </React.Fragment>
    );
}

export default home;

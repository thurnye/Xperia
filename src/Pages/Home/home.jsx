import React from 'react';
import './home.css'
import Destination from '../../components/advertDestination/destination'
import TravelGuide from '../../components/Travel Books/travelGuide'
import PreviewStories from '../../components/RecentStoriesPreview/recentStoriesPreview'
import GoogleMap from '../../components/GoogleMap/googleMap'
import AroundTheWorld from '../../components/AroundTheWorld/aroundTheWorld'
import TravelEssentials from '../../components/TravelEssentials/essentials'
import Footer from '../../components/Footer/footer'

const home = () => {
    return (
        <React.Fragment>
        <div className="component">
            carousel
           
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
        </React.Fragment>
    );
}

export default home;

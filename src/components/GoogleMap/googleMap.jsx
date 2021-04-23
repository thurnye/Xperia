import React, { Component } from 'react'
import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';


export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
        
        
      return (
        <Map google={this.props.google}
            // onClick={this.onMapClicked}
            // zoom={1.5}
           

            >

<Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />  

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} 
                  draggable={true}
                  onDragend={this.moveMarker}
                  />
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      )
    }
  }

export default GoogleApiWrapper({
apiKey: 'AIzaSyAt2uhNZAwTGX94hxb2CO_KwIWXGspCHkk'
})(MapContainer)
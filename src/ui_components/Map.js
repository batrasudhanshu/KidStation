import React, {Component} from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from '../images/leaf-green.png';
import leafShadow from '../images/leaf-shadow.png';



class MapComponent extends Component {
  
  state = {
    greenIcon: {
      lat: 28.664591,
      lng: 77.122093,
    },
       zoom: 10
  }


  grenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]
  });
 

  render(){
   
    const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
    
    return (
      <Map className="map" center={positionGreenIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGreenIcon} icon={this.grenIcon}>
          <Popup>
          KidStation
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapComponent;
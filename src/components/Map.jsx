import React, { Component } from "react";
import "./css/map.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const myIcon = L.icon({
  iconUrl: "https://www.flaticon.com/svg/static/icons/svg/0/619.svg",
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, 41],
});

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Maps: [],
      lat: 47.2074145,
      lng: -1.5558651,
      zoom: 14,
    };
  }

  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <div className="maps">
        <MapContainer className="map" center={position} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://
osm.org/copyright">OpenStreetMap</a> 
contributors'
            url="https://{s}.tile.openstreetmap.org/
{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={myIcon}>
            <Popup>Wild Code School</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

export default Maps;

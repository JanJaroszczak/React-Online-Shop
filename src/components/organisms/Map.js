import React, { useState } from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

import mapStyles from './styles/mapStyles';

import icon from '../../assets/icons/football.png';

const Map = () => {
  const [selectedShop, setSelectedShop] = useState(null);

  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 51.75, lng: 19.4666 }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Marker
        position={{ lat: 51.75, lng: 19.4666 }}
        onClick={() => {
          setSelectedShop(true);
        }}
        icon={{
          url: icon,
          scaledSize: new window.google.maps.Size(30, 30),
        }}
      />
      {selectedShop && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedShop(null);
          }}
          position={{
            lat: 51.75,
            lng: 19.4666,
          }}
        >
          <div>
            <h2>Cool Cleats Shop</h2>
            <p>Łódź Department</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default MapWrapped;

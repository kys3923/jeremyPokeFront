import { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapCSS = {
  width: '100%',
  height: '18 rem'
}

const center = {
  lat: -3.745,
  lng: -38.523
};

// TODO: need to check if google payment is working for the api key
const GoogleMaps = (props) => {

  const { isLoaded } = useLoadScript ({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API
  })

  const [ showInfoWindow, setShowInfoWindow ] = useState(true);
  const [ map, setMap ] = useState();

  if(!isLoaded) {
    return 'Loading...';
  } else {
    console.log(isLoaded)
    return (
      <>
        <Map />
      </>
    );
  }

}

export default GoogleMaps;

const Map = () => {
 return (
  <section className='w-screen'>
    <h1>Google Map Experiment</h1>
    <div className='w-full h-72 bg-green-300'>
      <GoogleMap
        id='map'
        mapContainerStyle={mapCSS}
        zoom={16}
        center={{lat: 44, lng: -80}}
      >

      </GoogleMap>
    </div>
  </section>
 ) 
}
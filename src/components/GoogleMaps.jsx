import { useEffect, useState, useCallback, memo }from 'react'
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import credencials from '../credencials'

const containerStyle = {
  width: '100%',
  height: '600px',
  maxWidth: '800px',
  margin: 'auto',
  border: '10px solid #eee' 
};


function Map({
  latlng
}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: credencials.mapsKey
  })
  
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0
  })

  useEffect(() => {
    if(latlng) {
      setCenter({
        lat: latlng[0],
        lng: latlng[1]
      })
    }  
  }, [latlng]) 

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} 
        onLoad={onLoad}
        onUnmount={onUnmount}>
           <Marker
            icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
            position={center}
          />
      </GoogleMap>
  ) : <></>
}

export default memo(Map)
import React from 'react'
import { useState } from 'react';
import { Map, Marker, NavigationControl, Popup } from 'react-map-gl';
import { markerRun } from './base/base_marker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

function CarteContact() {
    const [viewport, setViewport] = useState({
      latitude: -21.131,
      longitude: 55.5669,
      zoom: 8.95,
      width: "100%",
      height: "100%",
    });
    const [popPin, setpopPin] = useState(null);
  return (
    <>
       <Map
        initialViewState={viewport}
        mapStyle={"mapbox://styles/zephirsd18/cl1rdsvcb003y14qsjk3u0kc9"}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={setViewport}
      >
        <NavigationControl style={{marginRight: '15px', marginTop: '15px'}}/>
        {markerRun.map((mark) => (
          <Marker longitude={mark.longitude} latitude={mark.latitude} key={mark.id} onClick={e => {
            e.originalEvent.stopPropagation();
            setpopPin(mark);
          }}>
              <FontAwesomeIcon icon={faLocationPin} style={{fontSize: '38px', color: 'gray'}}/>
          </Marker>
        ))}
        {popPin && (
          <Popup anchor='bottom' onClose={() => setpopPin(null)} longitude={popPin.longitude} latitude={popPin.latitude} className='popupCase'>
            <div>
              <h1>{popPin.lieu}</h1>
              <p>{popPin.addresse}</p>
              <p className='popTel'>{popPin.num_tel}</p>
            </div>
          </Popup>
        )}
      </Map>
    </>
  )
}

export default CarteContact

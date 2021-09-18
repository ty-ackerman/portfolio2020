// import React, { useState } from "react";
import styled from "styled-components";
// import JournalButton from "../Components/JournalButton";
// import JournalInputName from "../Components/JournalInputName";

// const LocationContainer = styled.div`
//   width: 48%;
//   .button-container {
//     display: flex;
//   }
// `;

// const JournalLocation = () => {
//   const [location, setLocation] = useState("");
//   return (
//     <LocationContainer>
//       <JournalInputName inputName="Location" />
//       <div className="button-container">
//         <JournalButton
//           value="Here"
//           style={{ marginRight: "5px" }}
//           className="tags"
//         />
//         <JournalButton value="Search" className="tags" />
//       </div>
//       <div className="img-container">
//         <img
//           src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=400x400&key=AIzaSyA2xMUIGaKuG9V5287ZDbNxlRfOGNNc-Xc"
//           alt=""
//         />
//       </div>
//     </LocationContainer>
//   );
// };

// export default JournalLocation;

/* global document */
import * as React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import ReactMapGL, { Source, Layer } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidHlhY2t5IiwiYSI6ImNrdGRkdW9ycjJmMmsyb3A0dGIwNXZ0dnIifQ.2hAdKHOsRHnqhpf1Ehl4dQ"; // Set your mapbox token here

const LocationContainer = styled.div`
  width: 48%;
  .button-container {
    display: flex;
  }
`;

function JournalLocation() {
  const [viewport, setViewport] = useState({
    longitude: -79.4282195,
    latitude: 43.6429863,
    zoom: 16,
  });

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-79.4282195, 43.6429863] },
      },
    ],
  };

  const layerStyle = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": 5,
      "circle-color": "#007cbf",
    },
  };

  return (
    <LocationContainer>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="200px"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </ReactMapGL>
    </LocationContainer>
  );
}

export default JournalLocation;

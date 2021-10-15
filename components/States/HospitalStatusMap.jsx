import { GMAP_KEY } from "@lib/constants";
import { parametreize } from "@lib/utils";
import GoogleMapReact, { Polygon } from "google-map-react";
import React, { useState } from "react";

import StatusMarker from "./StatusMarker";

export default function HospitalStatusMap({state, hospitals}) {
    const [mapState, setMapState] = useState({
        center: {
            lat: state.lat,
            lng: state.lng,
        },
        zoom: state.zoom,
    })

    const onReady = ({ map, maps }) => {
      var stateLayer = new maps.Data();
      stateLayer.loadGeoJson(`/geojson/${parametreize(state.name)}.json`);
      stateLayer.setStyle(function(feature) {
        return {
        fillColor: '#42f56f', // call function to get color for state based on the COLI (Cost of Living Index)
        fillOpacity: 0.8,
        strokeColor: '#ffffff',
        strokeWeight: 1,
        zIndex: 1
        };
      });
      stateLayer.setMap(map)
      stateLayer.addListener('mouseover', function(event) {
        stateLayer.revertStyle();
        stateLayer.overrideStyle(event.feature, {strokeWeight: 4, fillColor: `#42f5df`});
      });
      stateLayer.addListener('mouseout', function(event) {
        stateLayer.revertStyle();
      });
      
    }
    console.log(state)
    return (<div>
      <div className="flex flex-wrap w-full justify-center items-center gap-2 pb-6">
        <span className="flex justify-center items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 50 50">
              <polygon points="25,0 50,50 0,50" fill="gray" />
            </svg>
            Site Ready
        </span>
        <span className="flex justify-center items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 50 50">
              <rect x="0" y="0" width="50" height="50" fill="gray" />
            </svg>
            Equipment Delivered
        </span>
        <span className="flex justify-center items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="25" fill="gray" />
            </svg>
            10BedICU Live
        </span>
        <span className="flex justify-center items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 50 50">
              {/* Completed */}
              <circle cx="25" cy="25" r="25" fill="green" />
            </svg>
            Completed
        </span>
        <span className="flex justify-center items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 50 50">
              {/* In Progress */}
              <circle cx="25" cy="25" r="25" fill="orange" />
            </svg>
            In Progress
        </span>
        <span className="flex justify-center items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 50 50">
              {/* Not Completed */}
              <circle cx="25" cy="25" r="25" fill="red" />
            </svg>
            Not Completed
        </span>


      </div>
      {(
        <div style={{ height: "75vh", width: "100%" }}>
            <GoogleMapReact
            bootstrapURLKeys={{
            key: GMAP_KEY,
            }}
            center={
              state.lat>0 & state.lng>0 ? 
              mapState.center : 
              {
                lat: 23.598_547_6,
                lng: 78.960_752_4,
              }}
            zoom={state.lat > 0 && state.lng > 0 ? 6 : 2}
            onGoogleApiLoaded={onReady}
            options={{
                restriction: {
                    latLngBounds: (state.north > 0 && state.south > 0 && state.east > 0 && state.west > 0 ? {
                        north: state.north,
                        south: state.south,
                        east: state.east,
                        west: state.west,
                      } :
                      {
                        north:35.63936,	south:6.20453,	west:68.14712,	east:97.34466
                      }),
                    strictBounds: true,
                  },
                styles:
                  [
                        {
                          elementType: "geometry",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          elementType: "labels.icon",
                          stylers: [
                            {
                              visibility: "off",
                            },
                          ],
                        },
                        {
                          elementType: "labels.text.fill",
                          stylers: [
                            {
                              color: "#616161",
                            },
                          ],
                        },
                        {
                          elementType: "labels.text.stroke",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "administrative.land_parcel",
                          elementType: "labels.text.fill",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "poi",
                          elementType: "geometry",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "poi",
                          elementType: "labels.text.fill",
                          stylers: [
                            {
                              color: "#757575",
                            },
                          ],
                        },
                        {
                          featureType: "poi.government",
                          elementType: "geometry.stroke",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "poi.medical",
                          elementType: "geometry.stroke",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "poi.park",
                          elementType: "geometry",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "poi.park",
                          elementType: "labels.text.fill",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "road",
                          elementType: "geometry",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "road",
                          elementType: "geometry.stroke",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "road.arterial",
                          elementType: "labels.text.fill",
                          stylers: [
                            {
                              color: "#757575",
                            },
                          ],
                        },
                        {
                          featureType: "road.highway",
                          elementType: "geometry",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "road.highway",
                          elementType: "labels.text.fill",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "road.local",
                          elementType: "labels.text.fill",
                          stylers: [
                            {
                              color: "#9e9e9e",
                            },
                          ],
                        },
                        {
                          featureType: "transit.line",
                          elementType: "geometry",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "transit.station",
                          elementType: "geometry",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "water",
                          elementType: "geometry",
                          stylers: [
                            {
                              color: "#ffffff",
                            },
                          ],
                        },
                        {
                          featureType: "water",
                          elementType: "labels.text.fill",
                          stylers: [
                            {
                              color: "#9e9e9e",
                            },
                          ],
                        },
                      ],
              }}
        >
          {
            hospitals.filter(hospital => hospital.latitude && hospital.longitude).map((hospital, renderIndex) => {
              console.log("Hospital at " + hospital.latitude + " " + hospital.longitude);
            return <StatusMarker
            key={hospital.hospital_name + renderIndex}
            lat={hospital.latitude}
            lng={hospital.longitude} 
            status={hospital}
          />
            })
          } 
        </GoogleMapReact>
      </div>
    )}
    </div>)
}
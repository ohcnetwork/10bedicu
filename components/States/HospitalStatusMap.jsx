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
        fillColor: '#000000', // call function to get color for state based on the COLI (Cost of Living Index)
        fillOpacity: 0.8,
        strokeColor: '#b3b3b3',
        strokeWeight: 1,
        zIndex: 1
        };
      });
      stateLayer.setMap(map)
    }
    console.log(state)
    return (state.lat && state.lng) ? (
        <div style={{ height: "75vh", width: "100%" }}>
            <GoogleMapReact
            bootstrapURLKeys={{
            key: GMAP_KEY,
            }}
            defaultCenter={{
            lat: 10.148_547_6,
            lng: 76.500_752_4,
            }}
            defaultZoom={8}
            center={mapState.center}
            zoom={6}
            onGoogleApiLoaded={onReady}
            options={{
                restriction: {
                    latLngBounds: {
                        north: state.north,
                        south: state.south,
                        east: state.east,
                        west: state.west,
                      },
                    strictBounds: false,
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
            hospitals.map((hospital, renderIndex) => {
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
    ) : ""
}
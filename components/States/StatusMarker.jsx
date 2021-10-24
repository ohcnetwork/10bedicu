import { colorForIcon } from "@lib/utils";
import React, { Component } from "react";

import { StatusPopUp } from "./StatusPopUp";

class Marker extends Component {
  state = {
    popup: false,
  };

  render() {
    const { data, status } = this.props;
    return (
      <div
        onMouseLeave={(e) => {
          this.setState({ popup: false });
        }}
        onClick={() => {
          const center = { lat: this.props.lat, lng: this.props.lng };
          const zoom = 13;
          // this.props.setFocus(center, zoom);
        }}
      >
        <StatusPopUp show={this.state.popup} hospital={status} />
        <div
          className="MarkerWrapper MapMarkerIcon"
          onMouseEnter={(e) => {
            this.setState({ popup: true });
          }}
        >
          <svg className="w-6 h-6" viewBox="0 0 125 125">
            <rect
              x="0"
              y="55"
              width="40"
              height="40"
              className={`fill-current ${colorForIcon(
                status.equipment_delivered
              )}`}
            />
            <circle
              cx="85"
              cy="100"
              r="25"
              className={`fill-current ${colorForIcon(status.icu_live)}`}
            />
            <polygon
              points="75,0 100,50 50,50"
              className={`fill-current ${colorForIcon(status.site_ready)}`}
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Marker;

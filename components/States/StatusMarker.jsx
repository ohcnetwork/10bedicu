import React, { Component } from "react";

const getColor = (status) => {
  switch (status) {
    case "pending":
      return "red";
    case "completed":
      return "green";
    case "in_progress":
      return "orange";
    default:
      return "gray";
  }
};

class Marker extends Component {
  state = {
    popup: false,
  };

  render() {
    const { data, status } = this.props;
    return (
      <div
        className="MarkerWrapper"
        onMouseLeave={(e) => {
          this.setState({ popup: false });
        }}
        onClick={() => {
          const center = { lat: this.props.lat, lng: this.props.lng };
          const zoom = 13;
          // this.props.setFocus(center, zoom);
        }}
      >
        <div
          className="MapMarkerIcon"
        >
            <svg className="w-6 h-6" viewBox="0 0 125 125">
                <rect x="0" y="55" width="40" height="40" fill={getColor(status.equipment_delivered)} />
                <circle cx="85" cy="100" r="25" fill={getColor(status.icu_live)} />
                <polygon points="75,0 100,50 50,50" fill={getColor(status.site_ready)} />
            </svg>
        </div>
      </div>
    );
  }
}

export default Marker;

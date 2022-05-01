import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  // TODO: by default, selectedFlat is the first one
  // takes flats from data/flats
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  // TODO: center takes the lat/lng of the SelectedFlat in order
  // to defaultCenter the map
  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  // TODO: selectedFlats takes by default the flat index
  // from the list and sets it
  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        {/* TODO: left side with a list of flats */}
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        {/* TODO: right side with the map and the marker */}
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

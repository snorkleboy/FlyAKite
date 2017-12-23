
import React from 'react';
import ReactDOM from 'react-dom';

// just a normal react component class :)
    // const mapCenter = (city, state) => $.ajax({
    //   url: `https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${state}&key=AIzaSyBtx5KlexIEYN2Jk6GFFpe8fqOHJm_XM6M`
    // });
const mapCenter = ({city, state, areaCode}) => $.ajax({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${state},${areaCode}&key=AIzaSyBtx5KlexIEYN2Jk6GFFpe8fqOHJm_XM6M`
});

class Map extends React.Component {
  constructor(props) {
    super(props)
    console.log('props', this.props)
  }
  componentDidMount() {
    mapCenter(this.props.location).then((response) => {
      const map = ReactDOM.findDOMNode(this.refs.map);
      const LatLng = response.results[0].geometry.location;
      const options = {
        center: LatLng,
        zoom: 13
      };
      this.map = new google.maps.Map(map, options);
      const pos = new google.maps.LatLng(LatLng.lat, LatLng.lng);
      const marker = new google.maps.Marker({
        position: pos,
        map: this.map
      });

    });
  }
  render() {
    return (
      <div>
        <span>MAP DEMO</span>
        <div id='map' ref='map'/>
      </div>
    );
  }
}

export default Map;
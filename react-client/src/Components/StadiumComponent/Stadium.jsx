import React, { Component } from 'react';
import { D3SeatingChart, ShowBehavior, SelectionBehavior } from 'd3-seating-chart';
import '../../../dist/stadium.css';

class Stadium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d3sc: ''
    };
  }
  goToBoard() {
    this.state.d3sc.goToBoard();
  }
  componentDidMount() {
    this.setState({ d3sc: D3SeatingChart.attach(document.getElementById('x')) });
  }
  zoomMe(e) {
    console.log(e.target.classList);
    if(e.target.classList.length === 0 )return false;
    this.d3sc.zoom(d3sc.select(e.target));
  }
 
  render() {
    return (
      <div id="stadium-map" className="col-sm-8">
        <svg id="x" width="640" height="480" xmlns="http://www.w3.org/2000/svg">
          <g board="1" >
            <rect stage="main" height="80.38871" width="126.153836" y="206.825647" x="206.459768" />
            <rect zoom-control="right" height="80.175489" width="57.875103" y="205.119891" x="338.511515" />
            <rect zoom-control="main" height="95.687786" width="126.854046" y="105.769235" x="206.180359" />
            <rect zoom-control="left" height="79.962273" width="57.448662" y="205.119891" x="142.930951" />
            <g seating-area="A" zoom-target="left" onClick={this.zoomMe.bind(this)}>
              <rect selected seat="1" height="14.560438" width="13" y="206.529233" x="158.181482" />
              <rect locked seat="2" height="14.560438" width="13" y="206.529233" x="172.049076" />
              <rect locked="reserved" seat="3" height="14.560438" width="13" y="206.475552" x="185.969085" />
            </g>
            <g seating-area="B" zoom-target="right" onClick={ this.zoomMe.bind(this) } >
              <rect seat="1" height="14.560438" width="13" y="206.529233" x="354.251359" l />
              <rect seat="2" height="14.560438" width="13" y="206.529233" x="368.118954"  />
              <rect seat="3" height="14.560438" width="13" y="206.475552" x="382.038963"  />
            </g>
          <g seating-area="C" zoom-target="main" onClick={this.zoomMe.bind(this)} >
            <rect seat="1" class="reserved" height="14.560438" width="13" y="106.863558" x="207.345423"  />
            <rect seat="2" class="locked" height="14.560438" width="13" y="106.863558" x="221.213018"  />
            <rect seat="3" height="14.560438" width="13" y="106.809877" x="235.133027"  />
          </g>
          </g>
        </svg>
      <button id="goToBoard" onClick={this.goToBoard.bind(this)}>Go to board</button>
      </div >
      
    )
  }
}


export default Stadium;

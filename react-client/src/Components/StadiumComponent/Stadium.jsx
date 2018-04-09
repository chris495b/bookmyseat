import React, { Component } from 'react';
import ReactSVG from 'react-svg'

class Stadium extends Component {
	
	seatselected(event){
		alert(this);

	}
	render() {
		return (
		  	<div id="stadium-map" className="col-sm-8">
		  	<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg">
     <g board>
      <rect stage height="80.38871" width="126.153836" y="206.825647" x="206.459768"/>
      <rect zoom-control="right" height="80.175489" width="57.875103" y="205.119891" x="338.511515"/>
      <rect zoom-control="main" height="95.687786" width="126.854046" y="105.769235" x="206.180359"/>
      <rect zoom-control="left" height="79.962273" width="57.448662" y="205.119891" x="142.930951"/>
      <g seating-area zoom-target="left">
       <rect selected seat height="14.560438" width="13" y="206.529233" x="158.181482"/>
       <rect locked seat height="14.560438" width="13" y="206.529233" x="172.049076"/>
       <rect locked="reserved" seat height="14.560438" width="13" y="206.475552" x="185.969085"/>
      </g>
      <g seating-area zoom-target="right">
       <rect seat height="14.560438" width="13" y="206.529233" x="354.251359"/>
       <rect seat height="14.560438" width="13" y="206.529233" x="368.118954"/>
       <rect seat height="14.560438" width="13" y="206.475552" x="382.038963"/>
      </g>
      <g seating-area zoom-target="main">
       <rect seat class="reserved" height="14.560438" width="13" y="106.863558" x="207.345423"/>
       <rect seat class="locked" height="14.560438" width="13" y="106.863558" x="221.213018"/>
       <rect seat height="14.560438" width="13" y="106.809877" x="235.133027"/>
      </g>
     </g>
    </svg>
		  </div>

		)
	}
}


export default Stadium;

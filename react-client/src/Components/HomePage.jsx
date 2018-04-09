import React, { Component } from 'react';
import Stadium from './StadiumComponent/Stadium';
import Ticket from './StadiumComponent/ticket';
class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Stadium />
          <div className="col-sm-4" >
            <div className="list-group">
              {
                new Array(4).fill('').map(function(data){
                  return <Ticket heading='List group item heading' summary='Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'  />
                })
              }
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomePage;
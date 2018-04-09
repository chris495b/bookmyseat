import React, { Component } from 'react';
class Ticket extends Component {
  render() {
    return (
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{this.props.heading}</h5>
            <small>3 days ago</small>
            </div>
            <p className="mb-1">{this.props.summary}</p>
            <small>Donec id elit non mi porta.</small>
        </a>
    )
  }
}
export default Ticket;
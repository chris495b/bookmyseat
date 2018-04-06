import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-light bg-light">
          <Link to="#" className="navbar-brand">Navbar</Link>
        </nav>
      </header>
    )
  }
}
export default NavBar;

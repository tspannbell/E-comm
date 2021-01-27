import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css"

class Navbar extends React.Component {
    render() {
      return (
        <div className ="NavList">
          <Link to="/Contact">Contact</Link>
          <Link to="/Instruments">Instruments</Link>
          <Link to="/DAWs">DAWs</Link>
          <Link to="/Speakers">Speakers and Monitors</Link>
          <Link to="/">Home</Link>
        </div>
      );
    }
  }
  
  export default Navbar;
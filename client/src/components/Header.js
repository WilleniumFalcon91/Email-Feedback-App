import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper light-blue">
          <a href="#!" className="left brand-logo">
            Emaily
            <i className="material-icons">email</i>
          </a>
          <ul className="right">
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

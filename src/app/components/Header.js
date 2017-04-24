import React from 'react';

// Stateless component. State change is impossible for this component so that its a constant not a class.
export const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
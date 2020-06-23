import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function () {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      {!menu && (
        <ul className="hamburger" onClick={() => setMenu(!menu)}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}
      {menu && <span onClick={() => setMenu(!menu)}>X</span>}
      <Link to="/browse">Fedbook</Link>
      {menu && (
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/browse">Browse</Link>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5V5b1zWX9k0PvZvMVNEtpUNOp7aENRGVl_Xf4U2dmcDOK0w/viewform"
            >
              Submit
            </a>
          </li>
          <li>Developed by @jadeallencook</li>
        </ul>
      )}
    </nav>
  );
}

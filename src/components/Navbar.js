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
      <Link to="/">Fedbook</Link>
      {menu && (
        <ul className="menu">
          <li>Browse</li>
          <li>About</li>
          <li>Resources</li>
          <li>Donate</li>
        </ul>
      )}
    </nav>
  );
}

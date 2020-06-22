import React from 'react';
import './Header.scss';

export default function () {
  return (
    <header>
      <h1>
        Discover the world around you on <b>Fedbook</b>
      </h1>
      <div>
        <input type="text" placeholder="Enter name or badge #" />
        <button>Search</button>
      </div>
    </header>
  );
}

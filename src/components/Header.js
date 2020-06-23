import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function (props) {
  const { query, setQuery } = props;
  return (
    <header>
      <h1>
        Discover the world around you on <b>Fedbook</b>
      </h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search name or badge #"
        />
        <Link to="/browse">Search</Link>
      </div>
    </header>
  );
}

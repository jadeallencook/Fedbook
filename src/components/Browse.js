import React from 'react';
import { Link } from 'react-router-dom';
import snapshot from '../snapshot.json';
import './Browse.scss';

export default function (props) {
  window.scrollTo(0, 0);
  const { profiles } = snapshot;
  const { query, setQuery } = props;
  return (
    <section className="Browse">
      <div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search name or badge #"
        />
      </div>
      <ul>
        {Object.keys(profiles)
          .reverse()
          .map((uid) => {
            const profile = profiles[uid];
            const { name, title, image } = profile;
            const ProfileImage = require(`../assets/profiles/${image}`);
            return (
              (!query ||
                (query &&
                  name.toLowerCase().indexOf(query.toLowerCase()) !== -1)) && (
                <Link to={`/profile/${uid}`} key={uid}>
                  <li>
                    <div>
                      <img src={ProfileImage} alt={name} />
                    </div>
                    <div>
                      <h3>{name}</h3>
                      <p>{title}</p>
                    </div>
                  </li>
                </Link>
              )
            );
          })}
      </ul>
    </section>
  );
}

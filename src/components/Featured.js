import React from 'react';
import './Featured.scss';
import { Link } from 'react-router-dom';
import snapshot from '../snapshot.json';

export default function () {
  const profiles = ['derek-chauvin', 'nick-boney'].map(
    (uid) => {
      return {
        uid: uid,
        ...snapshot.profiles[uid],
      };
    }
  );
  return (
    <ul className="Featured">
      {profiles.map((profile) => {
        const { uid, image, name, title } = profile;
        const ProfileImage = require(`../assets/profiles/${image}`);
        return (
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
        );
      })}
    </ul>
  );
}

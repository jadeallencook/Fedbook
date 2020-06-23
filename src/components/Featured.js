import React from 'react';
import './Featured.scss';
import { Link } from 'react-router-dom';
import snapshot from '../snapshot.json';

export default function () {
  const profiles = ['derek-chauvin', 'george-zimmerman'].map(
    (uid) => {
      return {
        uid: uid,
        ...snapshot.profiles[uid],
      };
    }
  );
  console.log(profiles);
  return (
    <ul className="Featured">
      {profiles.map((profile) => {
        const { uid, image, name, title } = profile;
        return (
          <Link to={`/profile/${uid}`} key={uid}>
            <li>
              <div>
                <img src={`/assets/profiles/${image}`} alt={name} />
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

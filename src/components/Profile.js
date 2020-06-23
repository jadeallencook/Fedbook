import React from 'react';
import './Profile.scss';
import snapshot from '../snapshot.json';

export default function (props) {
  const profile = snapshot.profiles[window.location.hash.split('/')[2]];
  const { name, image, title, department, category, wiki } = profile;
  return (
    <section className="Profile">
      <div className="banner"></div>
      <img className="profile" src={`/assets/profiles/${image}`} alt={name} />
      <h2>{name}</h2>
      <ul>
        <li>
          <i className="fa fa-suitcase" aria-hidden="true"></i>Works as{' '}
          <b>{title}</b> for <b>{category}</b>
        </li>
        <li>
          <i className="fa fa-university" aria-hidden="true"></i>Employeed by{' '}
          <b>{department}</b>
        </li>
        <li>
          <i className="fa fa-tags" aria-hidden="true"></i>Related to{' '}
          <b>George Floyd</b> and <b>Police Brutality</b>
        </li>
      </ul>
      <p>
        {wiki} <b>Wikipidia</b>
      </p>
    </section>
  );
}

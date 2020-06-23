import React from 'react';
import './Profile.scss';
import snapshot from '../snapshot.json';

export default function (props) {
  const profile = snapshot.profiles[window.location.hash.split('/')[2]];
  const {
    name,
    image,
    title,
    department,
    category,
    wiki,
    resources,
    keywords,
  } = profile;
  const ProfileImage = require(`../assets/profiles/${image}`);
  return (
    <section className="Profile">
      <div className="banner"></div>
      <img className="profile" src={ProfileImage} alt={name} />
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
          <i className="fa fa-tags" aria-hidden="true"></i>Related to {` `}
          {keywords.split(', ').map((keyword, index) => {
            if (keywords.split(', ').length === 1 || index !== 0) {
              return <b key={keyword}>{keyword}</b>;
            }
            if (index === 0) {
              return (
                <span key={keyword}>
                  <b>{keyword}</b> and{' '}
                </span>
              );
            }
          })}
        </li>
      </ul>
      {wiki ? (
        <p>
          {wiki} <b>Wikipedia</b>
        </p>
      ) : (
        <br />
      )}
      <ul className="resources">
        {resources &&
          resources.map((uid) => {
            const resource = snapshot.resources[uid];
            const { video, title } = resource;
            console.log(video.split('=')[1]);
            return (
              <li key={uid}>
                <iframe
                  title="video"
                  src={`https://www.youtube-nocookie.com/embed/${
                    video.split('=')[1]
                  }`}
                ></iframe>
                <div>
                  <p>{video.split('/')[2]}</p>
                  <p>{title}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

import React from 'react';
import './Profile.scss';
import snapshot from '../snapshot.json';

export default function (props) {
  window.scrollTo(0, 0);
  const profile = snapshot.profiles[window.location.hash.split('/')[2]];
  const {
    name,
    image,
    title,
    department,
    departmentLink,
    category,
    bio,
    bioLink,
    bioLinkText,
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
          <a rel="noopener noreferrer" href={departmentLink} target="_blank">
            {department}
          </a>
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
      {bio && bioLink && bioLinkText ? (
        <p>
          {bio}{' '}
          <a rel="noopener noreferrer" href={bioLink} target="_blank">
            {bioLinkText}
          </a>
        </p>
      ) : (
        <br />
      )}
      <ul className="resources">
        {resources &&
          resources.map((uid) => {
            const resource = snapshot.resources[uid];
            const { video, title, image, link } = resource;
            return (
              <li key={uid}>
                {image && (
                  <div
                    className="article-image"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  ></div>
                )}
                {video && (
                  <iframe
                    title="video"
                    src={`https://www.youtube-nocookie.com/embed/${
                      video.split('=')[1]
                    }`}
                  ></iframe>
                )}
                <a href={video ? video : link} rel="noopener noreferrer" target="_blank">
                  <p>
                    {video && video.split('/')[2]}
                    {link && link.split('/')[2]}
                  </p>
                  <p>{title}</p>
                </a>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

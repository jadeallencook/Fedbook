import React from 'react';
import './Dashboard.scss';
import template from '../templates/profile.template';

export default function () {
  const uid = () =>
    `${Math.random().toString(36).substr(3, 10)}${Math.random()
      .toString(36)
      .substr(3, 10)}`;
  return (
    <section className="Dashboard">
      <h2>Dashboard</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const elems = event.target.children;
          const profile = template;
          for (const elem of elems) {
            const key = elem.getAttribute('data-key');
            const type = elem.getAttribute('type');
            if (key) {
              profile[key] =
                type === 'number' ? Number(elem.value) : elem.value;
            }
          }
          console.log(
            JSON.stringify({
              [uid()]: profile,
            })
          );
        }}
      >
        <label>Name</label>
        <input type="text" data-key="name" placeholder="John Doe" required />
        <label>Image</label>
        <input type="text" data-key="image" placeholder="john-doe.jpg" />
        <label>Category</label>
        <select data-key="category">
          <option default>Law Enforcement</option>
          <option>Political Figure</option>
          <option>Social Worker</option>
          <option>Eductional System</option>
        </select>
        <label>Title</label>
        <select data-key="title">
          <option default>Police Officer</option>
          <option>U.S. President</option>
          <option>Supreme Court Judge</option>
          <option>District Court Judge</option>
          <option>Court of Appeals Judge</option>
          <option>Social Worker</option>
          <option>Teacher</option>
        </select>
        <label>Wiki</label>
        <textarea
          type="text"
          data-key="wiki"
          placeholder="About this person..."
        ></textarea>
        <input
          type="text"
          data-key="wikiLink"
          placeholder="https://en.wikipedia.org/wiki/"
        />
        <label>Office</label>
        <input
          type="text"
          data-key="department"
          placeholder="Minneapolis Police Department"
        />
        <input
          type="text"
          data-key="departmentLink"
          placeholder="http://www.ci.minneapolis.mn.us/police/"
        />
        <label>Badge</label>
        <input type="number" data-key="badge" placeholder="1234" />
        <label>Keywords</label>
        <input
          type="text"
          data-key="keywords"
          placeholder="Excessive Force, Misconduct"
        />
        <label>Zipcode</label>
        <input type="number" data-key="zipcode" placeholder="10000" />
        <label>Facebook</label>
        <input
          type="text"
          data-key="facebook"
          placeholder="https://www.facebook.com/"
        />
        <label>Twitter</label>
        <input
          type="text"
          data-key="twitter"
          placeholder="https://www.twitter.com/"
        />
        <label>Instagram</label>
        <input
          type="text"
          data-key="instagram"
          placeholder="https://www.instagram.com/"
        />
        <label>Year of Birth</label>
        <input type="number" data-key="dob" placeholder="1980" />
        <label>Salary</label>
        <input type="number" data-key="salary" placeholder="50000" />
        <input type="submit" />
      </form>
    </section>
  );
}

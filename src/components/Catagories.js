import React from 'react';
import './Catagories.scss';

export default function () {
  return (
    <ul className="Catagories">
      <li>
        <img src="/assets/symbols/police.png" alt="" />
        Police
      </li>
      <li>
        <img src="/assets/symbols/judge.png" alt="" />Court</li>
      <li>
        <img src="/assets/symbols/politicians.png" alt="" />Politicians</li>
      <li>
        <img src="/assets/symbols/other.png" alt="" />Other</li>
    </ul>
  );
}

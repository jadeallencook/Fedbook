import React from 'react';
import './Catagories.scss';
import PoliceIcon from '../assets/icons/police.png';
import CourtIcon from '../assets/icons/court.png';
import OtherIcon from '../assets/icons/other.png';
import PoliticiansIcon from '../assets/icons/politicians.png';

export default function () {
  return (
    <ul className="Catagories">
      <li>
        <img src={PoliceIcon} alt="Police Icon" />
        Police
      </li>
      <li>
        <img src={CourtIcon} alt="Court Icon" />
        Court
      </li>
      <li>
        <img src={PoliticiansIcon} alt="Politicians Icon" />
        Politicians
      </li>
      <li>
        <img src={OtherIcon} alt="Other Court Icon" />
        Other
      </li>
    </ul>
  );
}

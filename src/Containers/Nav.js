import React from 'react';
import { Link } from 'react-router-dom';
//import CV from '../Components/CV_Web_Developer_Nisha_Shukla.pdf';

import Profile from './Nisha_Profile_Img.jpg';

function Nav({ state }) {
  return (
    <div className='navWrapper'>
      <div className='nav'>
        <div className='navList'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='./CV_Web_Developer_Nisha_Shukla.pdf'>Download_CV</Link>
            </li>
            <li>
              <Link to='/certifications'>Certificates</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        <img src={Profile} alt='profile' />

        <h3>Projects</h3>
        <br />
        <ul>
          {state.map((project) => {
            return (
              <li>
                <Link to={`/${project.title}`}>{project.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Nav;

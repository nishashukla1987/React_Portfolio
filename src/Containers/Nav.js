import React from 'react';
import { Link } from 'react-router-dom';
import CV from '../Components/Nisha_Shukla_CV.pdf';
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
              <a target='_blank' href={CV}>
                Download_CV
              </a>
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

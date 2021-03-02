import React from 'react';
import { Link } from 'react-router-dom';
import CV from '../Components/CV_Web_Developer_Nisha_Shukla.pdf';

function Nav({ state }) {
  return (
    <div className='navWrapper'>
      <div className='nav'>
        <div className='navList'>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href={CV}>Download_CV</a>
            </li>
            <li>
              <a href='/certifications'>Certificates</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>

        <img src='../images/Nisha_Profile_Img.jpg' alt='profile' />

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

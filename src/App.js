import React, { useState } from 'react';
import Main from './Containers/Main';
import Nav from './Containers/Nav';
import { InitialState } from './State';
import './App.css';

function App() {
  const [state] = useState(InitialState);

  return (
    <div>
      <div className='nameWrapper'>
        <h1 className='name'>
          Nisha Shukla <br />
          <h5> Fullstack Wev Developer(MERN)</h5>
        </h1>
      </div>

      <div className='container'>
        <div className='mainWrapper'>
          <Main state={state} />
        </div>

        <div className='navWrapper'>
          <Nav state={state} />
        </div>
      </div>
    </div>
  );
}

export default App;

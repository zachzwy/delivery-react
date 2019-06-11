import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Nav from './component/Nav';
import Intro from './component/Intro';
import InfoWithHooks from './component/InfoWithHooks';
import './App.scss';

function App () {

  const [navClass, setNacClass] = useState('');

  const handleTrans = () => {
    const bodyDOM = document.querySelector('body');
    if (bodyDOM.className === 'fp-viewing-secondPage') {
      setNacClass('dark');
    } else {
      setNacClass('');
    }
  }

  useEffect(() => {
    window.addEventListener('transitionend', handleTrans);
    return () => window.removeEventListener('transitionend', handleTrans);
  }, []);

  return (
    <>
      <Nav navClass={navClass}/>
      <ReactFullpage
        anchors={['firstPage', 'secondPage']}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <div className='section' id="background">
                <Intro fullpageApi={fullpageApi} />
              </div>
              <div className='section'>
                <InfoWithHooks />
              </div>
            </>
          );
        }}
      />
    </>
  );
}

export default App;

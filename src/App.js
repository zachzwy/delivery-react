import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Nav from './Component/Nav';
import Intro from './Component/Intro';
import Info from './Component/Info';
import './App.scss';

class App extends React.Component {
  state = {
    navClass: '',
  };

  componentDidMount() {
    window.addEventListener('transitionend', this.handleTrans);
  }

  componentWillUnmount() {
    window.removeEventListener('transitionend', this.handleTrans);
  }

  handleTrans = () => {
    const bodyDOM = document.querySelector('body');
    if (bodyDOM.className === 'fp-viewing-secondPage') {
      this.setState({
        navClass: 'dark',
      });
    } else {
      this.setState({
        navClass: '',
      });
    }
  }

  render() {
    return (
      <>
        <Nav navClass={this.state.navClass}/>
        <ReactFullpage
          anchors={['firstPage', 'secondPage']}
          render={({ state, fullpageApi }) => {
            return (
              <>
                <div className='section' id="background">
                  <Intro fullpageApi={fullpageApi} />
                </div>
                <div className='section'>
                  <Info />
                </div>
              </>
            );
          }}
        />
      </>
    );
  }
}

export default App;

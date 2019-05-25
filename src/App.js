import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Info from './Component/Info';
import './App.scss';

function Intro({ fullpageApi }) {
  return (
    <div id="intro">
      <p>EASY MOVE</p>
      <h1>We save your moving cost by pairing you with others and sharing Trucks.</h1>
      <button
        id="start-button"
        onClick={() => fullpageApi.moveSectionDown()}
      >START</button>
    </div>
  );
}

function Nav({ navClass }) {
  return (
    <nav className={navClass}>
      <span >MY SETTLE DOWN</span>
      <ul>
        <li><a>LOGIN</a></li>
        <li><a>EXPLORE</a></li>
        <li><a>ABOUT</a></li>
      </ul>
    </nav>
  );
}

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
    if (bodyDOM.className === 'fp-viewing-1') {
      this.setState({
        navClass: 'dark',
      });
      document.querySelector('#input-from').focus(); // This is a problem
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
          // anchors={['firstPage', 'secondPage', 'thirdPage']}
          // scrollOverflow={true}
          // navigation
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

import React from 'react';
import './styles.scss';
import OmeletteLoading from './Animations/OmeletteLoading/OmeletteLoading';

function App() {

  return (
    <>
    <div className="App">
      <h1>Welcome to my CSS Animation dump</h1>
      <p className="landing-sub-heading">Just a place full of animations!</p>
      <div class="flex">
        <a href="#1" class="bttn-dark">Continue</a>
      </div>
    </div>
      <OmeletteLoading />
    </>
  );
}

export default App;

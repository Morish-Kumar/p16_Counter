import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

function App() {
  return (
    <React.Fragment>
      <button><Sumbit></Sumbit></button>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;

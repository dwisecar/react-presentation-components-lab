import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function logFun(){
  console.log('fun')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={logFun} />
  </div>,
  document.getElementById('root')
);
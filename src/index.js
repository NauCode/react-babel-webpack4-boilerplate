import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'A cool boilerplate title!';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept(); // Comment this line on production

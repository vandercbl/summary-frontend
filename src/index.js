import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Theme from './styles/Theme' // importando o tema para ter as variaveis de cor mediaqueries em toda a aplicação

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
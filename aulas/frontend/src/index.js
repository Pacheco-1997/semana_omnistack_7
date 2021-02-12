import React from 'react'; // é necessário para usar as tags JSX
import ReactDOM from 'react-dom';  // integração do react com a DOM do browser
import App from './App';    // importando o componente app, componente é um arquivo javascript que retorna um JSX, componete pode ser entendido como uma separação dos elementos da aplicação

import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



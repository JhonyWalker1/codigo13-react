import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//para importar un componente debemos llamarlo por el nombre que fue exportado
import PrimerComponente from './App';

ReactDOM.render(
  <React.StrictMode>
    {/para importar un componente debemos tratarlo como si fuera una etiqueta html*/}
    <PrimerComponente />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

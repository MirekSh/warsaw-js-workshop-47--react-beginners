import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log(document.createElement('h1'));
console.log(React.createElement('h1', null, 'Hooray!'))

console.log(App);
console.log(<App />)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

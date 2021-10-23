import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "./index.css";
import {BrowserRouter} from "react-router-dom"; 
// a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL.

ReactDOM.render(
  <>
  <BrowserRouter>
    <App />

</BrowserRouter >
</>,
  document.getElementById('root')

);
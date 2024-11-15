import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css'; // css-loader
import App from './App'; // babel-loader


// upto React 17 version
// ReactDOM.render(<App />, document.getElementById('root'));

// React 18 onwards
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


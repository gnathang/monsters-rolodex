import React from 'react'; // this is essentially the engine of react 
import ReactDOM from 'react-dom/client'; // this leverages the react 'engine' for use on the DOM (web)
import './index.css'; // familiar
import App from './App'; 
import reportWebVitals from './reportWebVitals';

// the following code says I want you render whatever you find in the App file
// at the point of 'root'...
// the 'root' element is inside the <body> tag in our html!!
// there is a slight difference here in syntax from react 17.0, but it does the same thing.

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode> // the App is essentially the whole App.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

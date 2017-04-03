// Import React and React-dom.
import React from 'react';
import ReactDOM from 'react-dom';

// Import the components.
import RootComponent from './root.jsx';

//import createSearch from './helpers/createSearch.js';

// Define the root element.
const root = document.querySelector('main');

// Append the DummyComponent to the root element.
ReactDOM.render(<RootComponent />, root);
//createSearch();

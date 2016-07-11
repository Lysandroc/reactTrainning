import React from 'react';
import ReactDOM from 'react-dom';
import App from './component.jsx'

var props = {
    title: title
    //, headings: headings 
    , rows: data
};

ReactDOM.render(<App {...props}/>, document.getElementById('app'));


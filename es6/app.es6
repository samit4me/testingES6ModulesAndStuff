import str from './str.es6';
import func from './func.es6';
import closure from './closure.es6';
import es6Class from './es6Class.es6';
import closurePlus from './closurePlus.es6';
import {pubMsg, getPrivateMsg as priMsg} from './closurePlus.es6';

import React from 'react';
import Homepage from './Homepage';

// var React = require('react');

let elHeading = document.querySelector('#heading');
if (elHeading) {
	window.setTimeout(() => { elHeading.textContent = '1) ' + str; }, 1000);
	window.setTimeout(() => { elHeading.textContent = '2) ' + func(); }, 2000);
	window.setTimeout(() => { elHeading.textContent = '3) ' + closure(); }, 3000);
    window.setTimeout(() => { 
        let es6 = new es6Class();
        elHeading.textContent = '4) ' + es6.getPublicMsg();
    }, 4000);
    window.setTimeout(() => { elHeading.textContent = '5) ' + closurePlus.getPublicMsg(); }, 5000);
    window.setTimeout(() => { elHeading.textContent = '6) ' + closurePlus.getPrivateMsg(); }, 6000);
    window.setTimeout(() => { elHeading.textContent = '7) ' + pubMsg(); }, 7000);
    window.setTimeout(() => { elHeading.textContent = '8) ' + priMsg(); }, 8000);
}

React.render(<Homepage msg="OMFG....." />, document.getElementById('react-output'));
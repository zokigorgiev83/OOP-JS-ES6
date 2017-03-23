// import $ from 'jquery';
import {Scotch} from '/classes/scotch.js';
import {Irish} from '/classes/irish.js';
import {American} from '/classes/american.js';
import {data} from '/data/data.js';
import {DataClass} from '/data/data-class.js';
import {Button} from '/user-interface/button.js';

let button = new Button('Click Me!');
button.appendToElement($('body'));

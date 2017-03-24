import {Scotch} from '/classes/scotch.js';
import {Irish} from '/classes/irish.js';
import {American} from '/classes/american.js';
import {data} from '/data/data.js';
import {DataClass} from '/data/data-class.js';
import {Button} from '/user-interface/button.js';
import {Image} from '/user-interface/image.js';
import {TitleBar} from '/user-interface/title-bar.js';

// let button = new Button('Click Me!');
// button.appendToElement($('body'));

// let image = new Image('./images/whiskey.jpg');
// image.appendToElement($('body'));

let titleBar = new TitleBar('Whiskey in the jar!');
titleBar.addLink('Home', '');
titleBar.addLink('Scotch', '');
titleBar.addLink('Irish', '');
titleBar.addLink('American', '');
titleBar.appendToElement($('body'));
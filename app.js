import {Scotch} from '/classes/scotch.js';
import {Irish} from '/classes/irish.js';
import {American} from '/classes/american.js';
import {data} from '/data/data.js';
import {DataClass} from '/data/data-class.js';

let showData = new DataClass();
showData.displayData(data);

for(let e of showData.errors) {
    console.log(e.message);
}




import {Scotch} from '/classes/scotch.js';
import {Irish} from '/classes/irish.js';
import {American} from '/classes/american.js';
import {data} from '/data/data.js';
import {DataClass} from '/data/data-class.js';
import {Button} from '/user-interface/button.js';
import {Image} from '/user-interface/image.js';
import {TitleBar} from '/user-interface/title-bar.js';
import {DataTable} from '/user-interface/data-table.js';

let headers = "Brand Category Distiller Owner Description".split(' ');
let dataService = new DataClass();
dataService.displayData(data);
let dataTable = new DataTable(headers, dataService.irish);
dataTable.appendToElement($('body'));
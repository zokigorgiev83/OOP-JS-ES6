import {Scotch} from '../classes/scotch.js';
import {Irish} from '../classes/irish.js';
import {American} from '../classes/american.js';
import {DataError} from './data-error.js';

export class DataClass  {
    constructor() {
        this.scotch = [];
        this.irish = [];
        this.american = [];
        this.errors = [];
    }

    displayData(data) {
        for (let whiskey of data) {
            switch (whiskey.type) {
                case 'scotch':
                    if(this.validateScotchData(whiskey)) {
                        let scotchWhiskey = this.loadScotch(whiskey);
                        if(scotchWhiskey)
                            this.scotch.push(scotchWhiskey);
                    } else {
                        let error = new DataError('Invalid scotch data', whiskey);
                        this.errors.push(error);
                    }
                    break;
                    // this.scotch.push(whiskey);
                    // break;
                case 'irish':
                    this.irish.push(whiskey);
                    break;
                case 'american':
                    this.american.push(whiskey);
                    break;
                default:
                    let error = new DataError('Invalid whiskey type', whiskey);
                    this.errors.push(error);
                    break;
            }
        }
    }

    loadScotch(scotchWhiskey) {
        try {
            let s = new Scotch(scotchWhiskey.brand, scotchWhiskey.category, scotchWhiskey.distiller, scotchWhiskey.owner, scotchWhiskey.description);
            return s;   
        } catch (error) {
            this.errors.push(new DataError('error loading scotch', scotchWhiskey));
        }
        return null;
    }

    validateScotchData(scotchWhiskey) {
        let requiredData = 'brand category distiller owner description'.split(' ');
        let hasErrors = false;

        for(let information of requiredData) {
            if(!scotchWhiskey[information]) {
                this.errors.push(new DataError(`Invalid information: ${information}`, scotchWhiskey));
                hasErrors = true;
            }
        }
        return !hasErrors;
    }
}
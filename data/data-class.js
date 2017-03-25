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
                case 'irish':
                    if(this.validateScotchData(whiskey)) {
                        let irishWhiskey = this.loadScotch(whiskey);
                        if(irishWhiskey)
                            this.irish.push(irishWhiskey);
                    } else {
                        let error = new DataError('Invalid irish whiskey data', whiskey);
                        this.errors.push(error);
                        }
                    break;
                case 'american':
                    if(this.validateScotchData(whiskey)) {
                        let americanWhiskey = this.loadScotch(whiskey);
                        if(americanWhiskey)
                            this.american.push(americanWhiskey);
                    } else {
                        let error = new DataError('Invalid american whiskey data', whiskey);
                        this.errors.push(error);
                        }
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
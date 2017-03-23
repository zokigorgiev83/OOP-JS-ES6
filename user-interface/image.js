import {BaseElement} from './base-element.js';

export class Image extends BaseElement {

    constructor (imageName) {
        super();
        this.imageName = imageName;
    }

    getElementString() {
        return `
                <img src="${this.imageName}" style="width: 100%;" />
            `;
    }
}
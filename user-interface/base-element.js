// import $ from 'jquery';

export class BaseElement {
    constructor() {
        this.element = null;
    }

    appendToElement(el) {
        this.createElement();
        el.append(this.element);
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw 'Please overwrite getElementString() in BaseElement';
    }
}
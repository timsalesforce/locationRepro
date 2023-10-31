import { LightningElement } from 'lwc';

export default class Location extends LightningElement {
    connectedCallback() {
        console.log('==== location: ', window.location.origin);
        new URL('/path', new URL(window.location).origin);
        try {
            this.throwError();
        } catch (e) {
            console.trace(e);
            throw e;
        }
    }

    throwError() {
        throw new Error('foo');
    }
}
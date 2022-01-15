import { LightningElement, api } from 'lwc';
import styles from '@salesforce/resourceUrl/theme';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class Footer extends LightningElement {
    renderedCallback() {
        Promise.all([
            loadStyle(this, styles + '/styles.css')
        ])

        .then(() => {
            console.log("Custom CSS Theme is loaded.")
        })

        .catch(error => {
            console.log("Failed to load Custom CSS Theme.");
        });
    }
}
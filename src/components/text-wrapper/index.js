import { ElementLite, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Component extends ElementLite(HTMLElement) {
  static get is () { return 'text-wrapper' }
  
  static get properties () {
    return {
      text: {
        type: String,
        value: 'hi'
      },
      params: {
        type: Object,
        value: {}
      },
      list: {
        type: Array,
        value: [
          'initial'  
        ]
      }
    }
  }
  
  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }
  
  buttonClicked ({ detail, target }) {
    this.dispatchEvent(new window.CustomEvent('text-wrapper-event', { detail: { ...detail, string: target.getAttribute('string') } }));
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
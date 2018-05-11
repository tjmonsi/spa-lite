import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Page extends ElementLiteLit(HTMLElement) {
  static get is () { return 'toggle-button-list'; }

  constructor () {
    super();
    this.__data = {};
  }

  set list (list) {
    this.__data['list'] = list;
    this.invalidate();
    
  }

  get list () {
    return this.__data['list'];
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }
  
  click ({ target: el }) {
    this.dispatchEvent(new CustomEvent('toggle-button', { detail: el.id }));
  }
  
  invalidate () {
    super.invalidate();
    if (this.shadowRoot) {
      const buttons = this.shadowRoot.querySelectorAll('button')
      for (let i = 0; i < buttons.length; i++) {
        if (this.list[i].toggle) {
          buttons[i].classList.add('on');
          buttons[i].classList.remove('off');
        } else {
          buttons[i].classList.remove('on');
          buttons[i].classList.add('off');
        }
      }  
    }
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}

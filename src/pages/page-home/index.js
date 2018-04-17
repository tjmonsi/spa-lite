import { ElementLiteLitOnly, html } from '@littleq/element-lite';
const { HTMLElement, customElements } = window;

class Page extends ElementLiteLitOnly(HTMLElement) {
  static get is () { return 'page-home' }
  
  render () {
    return html`Hello World`;
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
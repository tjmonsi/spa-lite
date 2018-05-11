import { ElementLiteStatic } from '@littleq/element-lite';
const { HTMLElement, customElements } = window;

class Page extends ElementLiteStatic(HTMLElement) {
  static get is () { return 'smart-buttons'; }

  static get properties () {
    return {
      list: {
        type: Array,
        observer: '_setList',
        value: [
          {
            id: '0',
            label: 'Button 1',
            toggle: false
          },
          {
            id: '1',
            label: 'Button 2',
            toggle: false
          }
        ]
      }
    };
  }
  
  constructor () {
    super();
    this._boundChangeList = this._changeList.bind(this);
  }
  
  connectedCallback () {
    super.connectedCallback();
    this.querySelector('toggle-button-list').addEventListener('toggle-button', this._boundChangeList);
  }
  
  disconnectedCallback () {
    super.disconnectedCallback();
    this.querySelector('toggle-button-list').removeEventListener('toggle-button', this._boundChangeList);
  }

  render () {
    return `<slot></slot>`;
  }

  _setList (list) {
    const listComponent = this.querySelector('toggle-button-list');
    if (listComponent) {
      listComponent.list = list;
    }
  }
  
  _changeList ({ detail: id }) {
    console.log(id)
    const list = [];
    for (let item of this.list) {
      if (item.id === id) {
        item.toggle = !item.toggle;
      }
      list.push(item);
    }
    this.list = list;
  } 
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}

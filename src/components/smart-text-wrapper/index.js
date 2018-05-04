import { ElementLite, html } from '@littleq/element-lite';
import { subscribe, unsubscribe, updateState } from '../../utils/ui-state.js';
const { HTMLElement, customElements } = window;

class SmartComponent extends ElementLite(HTMLElement) {
  static get is () { return 'smart-text-wrapper'; }

  static get properties () {
    return {
      text: {
        type: String,
        value: 'hello',
        observer: '_textChanged'
      },
      params: {
        type: Object,
        value: {},
        observer: '_paramsChanged'
      },
      list: {
        type: Array,
        value: []
      }
    }
  }

  constructor () {
    super();
    this._boundRouteChanged = this._routeChanged.bind(this);
    this._boundRouteParamObjectChanged = this._routeParamObjectChanged.bind(this);
    this._boundTextWrapperChanged = this._textWrapperChanged.bind(this);
    this._boundListChanged = this._listChanged.bind(this);
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    this._textChanged(this.text);
    this.querySelector('text-wrapper').addEventListener('text-wrapper-event', this._boundTextWrapperChanged)
    subscribe('currentRoute', this._boundRouteChanged);
    subscribe('routeParamObject',  this._boundRouteParamObjectChanged);
    subscribe('list', this._boundListChanged);
  }

  disconnectedCallback () {
    if (super.disconnectedCallback) super.disconnectedCallback();
    this.querySelector('text-wrapper').removeEventListener('text-wrapper-event', this._boundTextWrapperChanged)
    unsubscribe('currentRoute', this._boundRouteChanged);
    unsubscribe('routeParamObject', this._boundRouteParamObjectChanged);
    unsubscribe('list', this._boundListChanged);
  }

  render () {
    return html`<slot></slot>`;
  }

  _textChanged (text) {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].text = text;
    }
  }

  _paramsChanged (params) {
    this.querySelector('text-wrapper').params = params;
  }

  _routeChanged (value) {
    this.text = '/' === value ? 'Home' : 'Elsewhere';
  }

  _routeParamObjectChanged (params) {
    this.params = params;
  }

  _textWrapperChanged ({ detail }) {
    updateState('list', [ ...this.list, detail.string ]);
  }

  _listChanged (list) {
    this.list = list;
    this.querySelector('text-wrapper').list = list;
  }
}

if (!customElements.get(SmartComponent.is)) {
  customElements.define(SmartComponent.is, SmartComponent);
} else {
  console.warn(`${SmartComponent.is} is already defined somewhere. Please check your code.`);
}
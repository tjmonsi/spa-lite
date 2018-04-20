(self.webpackJsonp=self.webpackJsonp||[]).push([[2],{17:function(e,t,s){"use strict";var r,n=s(18),a=s(27),i=s(26),l=(r=i)&&r.__esModule?r:{default:r};const{HTMLElement:o,customElements:d}=window;class u extends((0,n.ElementLiteLitOnly)(o)){static get is(){return"page-home"}render(){return n.html`<style>${l.default.toString()}</style>${(0,a.template)(this)}`}}d.get(u.is)?console.warn(`${u.is} is already defined somewhere. Please check your code.`):d.define(u.is,u)},20:function(e,t,s){"use strict";var r=s(18),n=s(0);const{HTMLElement:a,customElements:i}=window;class l extends((0,r.ElementLite)(a)){static get is(){return"smart-text-wrapper"}static get properties(){return{text:{type:String,value:"hello",observer:"_textChanged"},params:{type:Object,value:{},observer:"_paramsChanged"},list:{type:Array,value:[]}}}constructor(){super(),this._boundRouteChanged=this._routeChanged.bind(this),this._boundRouteParamObjectChanged=this._routeParamObjectChanged.bind(this),this._boundTextWrapperChanged=this._textWrapperChanged.bind(this),this._boundListChanged=this._listChanged.bind(this)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._textChanged(this.text),this.querySelector("text-wrapper").addEventListener("text-wrapper-event",this._boundTextWrapperChanged),(0,n.subscribe)("currentRoute",this._boundRouteChanged),(0,n.subscribe)("routeParamObject",this._boundRouteParamObjectChanged),(0,n.subscribe)("list",this._boundListChanged)}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.querySelector("text-wrapper").removeEventListener("text-wrapper-event",this._boundTextWrapperChanged),(0,n.unsubscribe)("currentRoute",this._boundRouteChanged),(0,n.unsubscribe)("routeParamObject",this._boundRouteParamObjectChanged),(0,n.unsubscribe)("list",this._boundListChanged)}render(){return r.html`<slot></slot>`}_textChanged(e){for(let t=0;t<this.children.length;t++)this.children[t].text=e}_paramsChanged(e){this.querySelector("text-wrapper").params=e}_routeChanged(e){this.text="/"===e?"Home":"Elsewhere"}_routeParamObjectChanged(e){this.params=e}_textWrapperChanged({detail:e}){(0,n.updateState)("list",[...this.list,e.string])}_listChanged(e){this.list=e,this.querySelector("text-wrapper").list=e,(0,n.getState)().then(e=>console.log(e))}}i.get(l.is)?console.warn(`${l.is} is already defined somewhere. Please check your code.`):i.define(l.is,l)},21:function(e,t,s){(e.exports=s(19)(!1)).push([e.i,"",""])},22:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.template=void 0;var r=s(18);t.template=(e=>r.html`
  <span>
    Hey! ${e.text} ${e.params.id}
  </span>
  
  <ul>
    ${e.list.map(e=>r.html`<li>${e}</li>`)}
  </ul>
  
  <button string="Gauven" on-click=${e.buttonClicked.bind(e)}>
    Click here
  </button>
`)},23:function(e,t,s){"use strict";var r,n=s(18),a=s(22),i=s(21),l=(r=i)&&r.__esModule?r:{default:r};const{HTMLElement:o,customElements:d}=window;class u extends((0,n.ElementLite)(o)){static get is(){return"text-wrapper"}static get properties(){return{text:{type:String,value:"hi"},params:{type:Object,value:{}},list:{type:Array,value:["initial"]}}}render(){return n.html`<style>${l.default.toString()}</style>${(0,a.template)(this)}`}buttonClicked({detail:e,target:t}){this.dispatchEvent(new window.CustomEvent("text-wrapper-event",{detail:Object.assign({},e,{string:t.getAttribute("string")})}))}}d.get(u.is)?console.warn(`${u.is} is already defined somewhere. Please check your code.`):d.define(u.is,u)},26:function(e,t,s){(e.exports=s(19)(!1)).push([e.i,".red {\n  color: #f00;\n}\n",""])},27:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.template=void 0;var r=s(18);s(23),s(20);t.template=(e=>r.html`
  <div class="red">
    Hello World
    <a href="/page/tj">
      Click
    </a>
    <smart-text-wrapper>
      <text-wrapper></text-wrapper>
    </smart-text-wrapper>
  </div>
`)}}]);
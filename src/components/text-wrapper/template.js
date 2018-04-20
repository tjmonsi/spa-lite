import { html } from '@littleq/element-lite';

const template = (self) => html`
  <span>
    Hey! ${self.text} ${self.params.id}
  </span>
  
  <ul>
    ${self.list.map(item => 
      html`<li>${item}</li>`
    )}
  </ul>
  
  <button string="Gauven" on-click=${self.buttonClicked.bind(self)}>
    Click here
  </button>
`;

export { template };
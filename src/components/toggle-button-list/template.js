import { html } from '@littleq/element-lite';

const template = (self) => html`
  ${self.list.map(item => html`
    <button on-click=${self.click.bind(self)} id="${item.id}">${item.id} ${item.toggle} ${item.label}</button>
  `)}
`;

export { template };

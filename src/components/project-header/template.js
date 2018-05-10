import { html } from '@littleq/element-lite';

const template = (self) => html`
  <header class="header">
    <h1 class="title">
      Title
    </h1>
    <div class="spacer">
    </div>
    <navigation-loader>
      <header-navigation>
      </header-navigation>
    </navigation-loader>
  </header>
`;

export { template };

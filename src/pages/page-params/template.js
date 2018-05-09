import { html } from '@littleq/element-lite';
import '../../components/text-wrapper/index.js';
import '../../components/smart-text-wrapper/index.js';

const template = (self) => html`
  <div class="red">
    Page Params
    <smart-text-wrapper>
      <text-wrapper></text-wrapper>
    </smart-text-wrapper>
  </div>
`;

export { template };

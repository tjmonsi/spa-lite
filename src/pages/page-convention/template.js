import { html } from '@littleq/element-lite';

const template = (self) => html`
  <main role="main">
    <h1>Conventions</h1>
    <section>
      <h2 class="h2">General</h2>
      <ul>
        <li>There should be a space between the name of the structure and the following parentheses</li>
        <li>Conditions which are concluded within the brackets should be separated with space</li>
        <li>There is no space after the left bracket and before the right bracket</li>
        <li>The open curly brace is on the same line</li>
      </ul>
    </section>
    <section>
      <h2 class="h2">Naming Convetions</h2>
      <ul>
        <li>Variables: use camelCase. Ex: <code>let myVariable</code></li>
        <li>Constants: use camelCase. Ex: <code>const myConstant</code></li>
        <li>Function: use camelCase. Ex: <code>myFunction () {}</code></li>
        <li>Class name: use camelCase and capitalize the first character. Ex: <code>class MyClass {}</code></li>
        <li>Observers: use camelCase and palce an '_' in front. Ex: <code>_userChange () {}</code></li>
        <li>Page name: use '-' for delimiting the words and place the word 'page' in front. Ex: <code>page-not-found</code></li>
        <li>Component name: use '-' for delimiting the words. Ex: <code>header-navigation</code></li>
      </ul>
    </section>
    <section>
      <h2>Creating a Page</h2>
      <ol>
        <li>Create a new folder at <code>src/pages</code> following the naming convention on creating a page.</li>
        <li>Inside the newly created folder:
          <ol>
            <li>Create a new file named <code>template.js</code> this will be used for writing html.</li>
            <li>Create a new file named <code>style.styl</code> this will be used for writing <cite><a href="http://stylus-lang.com/">stylus css</a></cite></li>
            <li>Create a new file named index.js this will be used for writing the functions used in the page.</li>
          </ol>
        </li>
        <li>Update the fragments at <code>spa-lite-config.js</code>:
        <pre>
          const fragments = {
            'page-home': 'src/pages/page-home/index.js',
            'page-not-found': 'src/pages/page-not-found/index.js'
          }
        </pre>
        add another property with a key that is the same as the name of the page and has a value of the location of the <code>index.js</code> of the page. Example: <code>'page-about': 'src/pages/page-about/index.js'</code>
        </li>
        <li>Update the routes at <code>spa-lite.config.js</code>. In the code:
          <pre>
            const routes = [
              {
                route: '/',
                page: 'page-home'
              },
              {
                route: 'no-page',
                page: 'page-not-found'
              }
            ];
          </pre>
          add another object:
          <pre>
            {
              route: '/about', // the route of the page
              page: 'page-about' // the page location
            }
          </pre>
        </li>
      </ol>
    </section>
    <section>
      <h2>Creating a Component</h2>
      <ol>
        <li>Create a new folder at <code>src/components</code> for <code>dumb components</code> or at <code>src/smart-components</code> for <code>smart components</code>. Note: Do following the naming convention on creating a component.</li>
        <li>Inside the newly created folder:
          <ol>
            <li>Create a new file named <code>template.js</code> this will be used for writing html.</li>
            <li>Create a new file named <code>style.styl</code> this will be used for writing <cite><a href="http://stylus-lang.com/">stylus css</a></cite></li>
            <li>Create a new file named index.js this will be used for writing the functions used in the page.</li>
          </ol>
        </li>
        <li>Import the component in the <code>index.js</code> then use the tag of your component in <code>template.js</code></li>
      </ol>
    </section>
    <section>
      <h2>Flex vs Grid</h2>
      <p>Use grid for any two-dimentional layout and flex for one-dimentional layout. To understand the reasons you may read: <cite><a href="https://rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/">Should I use Grid or Flexbox</a></cite> and <cite><a href="https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf">The ultimate CSS battle: Grid vs Flexbox</a></cite> To understand Grid and Flex you may read: <cite><a href="https://css-tricks.com/snippets/css/complete-guide-grid/">A Complete Guide to Grid</a></cite>, <cite><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a></cite>, <cite><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox</a></cite>, and <cite><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex">Flex</a></cite></p>
    </section>
  </main>
`;

export { template };
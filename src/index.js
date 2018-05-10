import '@littleq/core-lite';
import { fragments } from './utils/fragments.js';
import { updateState } from './utils/ui-state.js';
const core = document.querySelector('core-lite');
core.addEventListener('current-route-change', currentRouteChanged);
core.addEventListener('route-param-object-change', routeParamObjectChanged);

function currentRouteChanged ({ detail: route }) {
  lazyLoad(fragments[route]);
  updateState('currentRoute', route);
}

function routeParamObjectChanged ({ detail: params }) {
  updateState('routeParamObject', params);
}

async function lazyLoad (fragment) {
  try {
    if (fragment && typeof fragment === 'function') {
      await fragment();
    } else {
      await Promise.reject(new Error('No fragment found'));
    }
  } catch (error) {
    console.log(error);
  }
}

import('./components/project-header/index.js');

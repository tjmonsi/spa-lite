import '@littleq/core-lite';
import { fragments } from '../config/fragments.js';
const core = document.querySelector('core-lite');
const handleRequest = ({ detail: pattern }) => lazyLoad(fragments[pattern]);
core.addEventListener('current-route-change', handleRequest);

async function lazyLoad (fragment) {
  try {
    console.log(fragment)
    if (fragment && typeof fragment === 'function') {
      await fragment();
    } else {
      await Promise.reject(new Error('No fragment found'));
    }
  } catch (error) {
    console.log(error);
  }
}

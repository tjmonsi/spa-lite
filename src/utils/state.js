import { worker } from './worker-connector.js';

const functions = {};
const lastValues = {};

const subscribe = (path, fn) => {
  if (!functions[path]) functions[path] = [];
  if (functions[path].indexOf(fn) < 0) functions[path].push(fn);
  if (lastValues[path]) fn(lastValues[path]);
};

const unsubscribe = (path, fn) => {
  const index = functions[path].indexOf(fn);
  if (index >= 0) functions[path].splice(index, 1);
};

async function dispatch (path, value) {
  await Promise.resolve();
  const fns = functions[path];
  lastValues[path] = value;
  if (fns) {
    for (let i = 0; i < fns.length; i++) {
      const fn = fns[i];
      fn(value);
    }  
  }
}

const getState = () => new Promise(resolve => {
  const getStateFromWorker = ({ data }) => {
    const { action, value } = data;
    if (action === 'get-state') {
      resolve(value);
      worker.removeEventListener('message', getStateFromWorker);
    }
  }
  worker.postMessage({
    action: 'get-state'
  });
  worker.addEventListener('message', getStateFromWorker);
});


function updateState (path, value) {
  worker.postMessage({
    action: 'change-state',
    path,
    value
  });
}

worker.addEventListener('message', ({ data }) => {
  const { action, path, value } = data;
  if (action === 'change-state') return dispatch(path, value);
});

export { subscribe, unsubscribe, dispatch, updateState, getState };

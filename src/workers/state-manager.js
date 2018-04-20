let currentState = {};
const stateTimeline = [];

const reducer = (path, state = {}, value) => {
  const obj = {};
  obj[path] = value;
  return { ...state, ...obj };
};

const stateManager = (data) => {
  const { action } = data;
  if (action === 'change-state') {
    const { path, value } = data;
    currentState = reducer(path, currentState, value);
    if (stateTimeline.length >= 1000) {
      stateTimeline.pop();
    }
    stateTimeline.unshift(currentState);
    global.postMessage({ action, path, value });
  } else if (action === 'get-state') {
    console.log(action)
    global.postMessage({ action, value: currentState });
  }
};

const updateState = (path, value) => {
  stateManager({
    action: 'change-state',
    path,
    value
  });
};

global.addEventListener('message', ({ data }) => {
  stateManager(data);
});

export { updateState, currentState };

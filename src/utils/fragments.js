const fragments = {
  '/': () => import('../pages/page-home/index.js'),
  '/page/:id': () => import('../pages/page-params/index.js')
};
export { fragments };

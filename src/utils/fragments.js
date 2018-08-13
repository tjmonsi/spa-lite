const fragments = {
  '/': () => import('../pages/page-home/index.js'),
  '/convention': () => import('../pages/page-convention/index.js'),
  'no-page': () => import('../pages/page-not-found/index.js')
};
export { fragments };

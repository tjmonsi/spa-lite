const fs = require('fs');
const { resolve, relative } = require('path');
const watch = process.argv.find(item => item === '--watch');
const target = resolve(__dirname, 'src/utils');

const fragmentBuild = () => {
  console.log('building fragments');
  const fragments = JSON.parse(fs.readFileSync(resolve(__dirname, 'config/fragments.json'), 'utf8'));
  const routes = JSON.parse(fs.readFileSync(resolve(__dirname, 'config/route.json'), 'utf8'));
  const lazyLoad = [];
  routes.forEach(route => {
    lazyLoad.push(`'${route.route}': () => import('${relative(target, resolve(__dirname, fragments[route.page]))}')`)
  });
  const string = `const fragments = {\n  ${lazyLoad.join(',\n  ')}\n};\nexport { fragments };`
  fs.writeFileSync(resolve(target, 'fragments.js'), string.trim() + '\n', 'utf-8');
};
fragmentBuild();
if (watch) {
  fs.watch(resolve(__dirname, 'config/fragments.json'), {}, fragmentBuild);
  fs.watch(resolve(__dirname, 'config/route.json'), {}, fragmentBuild);
}
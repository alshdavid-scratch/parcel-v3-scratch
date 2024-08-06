const node_module = require('node:module');
// import * as module from 'module';

const node_require = node_module.createRequire('/home/dalsh/Development/parcel-bundler/parcel-v3-scratch/.parcelrc');
const filepath = node_require.resolve('./plugins/resolver.js');

console.log(filepath)
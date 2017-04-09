'use strict';

const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.github.com/1000ch/simplehttp2server/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
  .src(`${url}macos/simplehttp2server`, 'darwin')
  .src(`${url}linux/simplehttp2server`, 'linux')
  .src(`${url}win/simplehttp2server.exe`, 'win32')
  .dest(path.resolve(__dirname, '../vendor'))
  .use(process.platform === 'win32' ? 'simplehttp2server.exe' : 'simplehttp2server');

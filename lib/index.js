'use strict';

const path = require('path');
const BinWrapper = require('bin-wrapper');
const suffix = require('./suffix.js');

const url = `https://github.com/GoogleChrome/simplehttp2server/releases/download/3.1.3/`;
const extension = process.platform === 'win32' ? '.exe' : '';
const filename = `simplehttp2server${suffix()}${extension}`;

module.exports = new BinWrapper()
  .src(`${url}${filename}`)
  .dest(path.resolve(__dirname, '../vendor/'))
  .use(filename);

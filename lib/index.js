
'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://raw.github.com/1000ch/simplehttp2server/v' + pkg.version + '/vendor/';

module.exports = new BinWrapper()
  .src(url + 'osx/simplehttp2server', 'darwin')
  .src(url + 'linux/simplehttp2server', 'linux')
  .src(url + 'win/simplehttp2server.exe', 'win32')
  .dest(path.join(__dirname, '../vendor'))
  .use(process.platform === 'win32' ? 'simplehttp2server.exe' : 'simplehttp2server');

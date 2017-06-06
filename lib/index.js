'use strict';

const path = require('path');
const BinWrapper = require('bin-wrapper');

const url = `https://github.com/GoogleChrome/simplehttp2server/releases/download/3.1.3/`;

let suffix;
if(process.platform === 'darwin') suffix = '_darwin_amd64';
else if(process.platform === 'linux' && process.arch === 'x64') suffix = '_linux_amd64';
else if(process.platform === 'linux' && process.arch === 'arm') suffix = '_linux_arm';
else if(process.platform === 'linux' && process.arch === 'ia32') suffix = '_linux_386';
else if(process.platform === 'indows' && process.arch === 'win32') suffix = '_windows_amd64';
else throw new Error(`No binary available for ${process.platform}/${process.arch}`);

const extension = process.platform === 'win32' ? '.exe' : '';
const filename = `simplehttp2server${suffix}${extension}`;

module.exports = new BinWrapper()
  .src(`${url}${filename}`)
  .dest(path.resolve(__dirname, '../vendor/'))
  .use(filename);


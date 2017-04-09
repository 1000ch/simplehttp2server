#!/usr/bin/env node
'use strict';

const spawn = require('child_process').spawn;
const simplehttp2server = require('.');

const input = process.argv.slice(2);

spawn(simplehttp2server, input, {
  stdio: 'inherit'
}).on('exit', process.exit);

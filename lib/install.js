'use strict';

const path = require('path');
const BinBuild = require('bin-build');
const log = require('logalot');
const suffix = require('./suffix');
const bin = require('.');

bin.download();

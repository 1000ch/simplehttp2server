import path from 'node:path';
import process from 'node:process';
import {fileURLToPath} from 'node:url';
import BinWrapper from 'bin-wrapper';
import suffix from './suffix.js';

const url = 'https://github.com/GoogleChromeLabs/simplehttp2server/releases/download/3.1.3/';
const extension = process.platform === 'win32' ? '.exe' : '';
const filename = `simplehttp2server${suffix()}${extension}`;
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

const index = new BinWrapper()
  .src(`${url}${filename}`)
  .dest(path.resolve(currentDirectory, '..', 'vendor'))
  .use(filename);

export default index;

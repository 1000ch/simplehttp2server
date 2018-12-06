'use strict';
const test = require('ava');
const execa = require('execa');
const simplehttp2server = require('..');

test('return path to binary and verify that it is working', async t => {
  let res = '';
  try {
    res += await execa(simplehttp2server, ['--help']);
  } catch (error) {
    // It will fail, as the exit status code of the executable is 2
    res += error;
  }
  // So: we check the output
  if (
    /Usage of/m.test(res) &&
    /-config string/m.test(res) &&
    /-cors string/m.test(res) &&
    /-listen string/m.test(res)
  ) {
    t.pass();
  } else {
    t.fail(res);
  }
});

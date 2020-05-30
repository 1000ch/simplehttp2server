'use strict';
const test = require('ava');
const execa = require('execa');
const simplehttp2server = require('..');

test('return path to binary and verify that it is working', async t => {
  let output = '';
  try {
    output += await execa(simplehttp2server, ['--help']);
  } catch (error) {
    // It will fail, as the exit status code of the executable is 2
    output += error;
  }

  if (
    /Usage of/m.test(output) &&
    /-config string/m.test(output) &&
    /-cors string/m.test(output) &&
    /-listen string/m.test(output)
  ) {
    t.pass();
  } else {
    t.fail(output);
  }
});

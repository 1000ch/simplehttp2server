# simplehttp2server [![Build Status](https://travis-ci.org/1000ch/simplehttp2server.svg?branch=master)](https://travis-ci.org/1000ch/simplehttp2server)

> [simplehttp2server](https://github.com/GoogleChromeLabs/simplehttp2server) serves the current directory on an HTTP/2.0 capable server. This server is for development purposes only.

You probably want [simplehttp2server-cli](https://github.com/1000ch/simplehttp2server-cli) instead.

## Install

```
$ npm install --save simplehttp2server
```

## Usage

```js
const {execFile} = require('child_process');
const simplehttp2server = require('simplehttp2server');

execFile(simplehttp2server, err => {
  console.log('simplehttp2server is starting!');
});
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)

#!/usr/bin/env node

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';
process.env.BABEL_CACHE = '1';

process.on('unhandledRejection', err => {
  throw err;
});

require('./start');

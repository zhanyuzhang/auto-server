#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const program = require('commander');
const chalk = require('chalk');
const ip = require('ip');

const packageJson = require('../package.json');

program
  .version(packageJson.version)
  .option('--port <port>', 'select port to use, default: 3000')
  .option('--host <host>', 'select host to use, default: your IP adress')
  .parse(process.argv)

const port = Number(program.port) || 3000;
const host = program.host || ip.address();

const args = [
  require.resolve('gulp/bin/gulp'),
  '--gulpfile',
  path.resolve(__dirname, 'gulpfile.js'),
  '--color',
  '--port',
  port,
  '--host',
  host,
  '--cwd',
  process.cwd()
];


const options = {
  stdio: 'inherit'
};

spawn('node', args, options);
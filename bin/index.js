#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const program = require('commander');

program
  .version('1.0.4')
  .option('-p, --port', 'select port to use, default: 3000')
  .parse(process.argv)

// 获取端口号，如果没有默认使用3000
const [ port = 3000 ] = program.args;

const args = [
  require.resolve('gulp/bin/gulp'),
  '--gulpfile',
  path.resolve(__dirname, 'gulpfile.js'),
  '--color',
  '--port',
  port,
  '--cwd',
  process.cwd()
];


const options = {
  stdio: 'inherit'
};

spawn('node', args, options);
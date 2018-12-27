#!/usr/bin/env node

/*
 * @Author: kangning1206
 * @Date:   2018-12-27 14:58:11
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-12-27 16:23:47
 */

// exec: [Function],
// execFile: [Function],
// spawn: [Function],
// spawnSync: [Function: spawnSync],
// execFileSync: [Function: execFileSync],
// execSync: [Function: execSync] }

const { spawn,spawnSync, exec } = require('child_process');

// const c = require('child_process');
// console.log(c)

function createProject(name, options) {

  spawn('vue', ['create', name], {
      stdio: 'inherit'
  });

  // const vue = spawn('vue', ['create', name]);
  // vue.stdout.on('data', (data) => {
  //   //console.log(`${data}`);
  //   console.log(data+'');
  // });
  // vue.stderr.on('data', (data) => {
  //   console.log(`${data}`);
  // });

  // vue.on('close', (code) => {
  //   console.log(`子进程退出码：${code}`);
  // });
}




module.exports = createProject;



// import {spawn} from 'child_process';
// // *** Not async
// export default function clone(options: { url: string; path: string; }) {
//   // *** Return the promise
//   return new Promise(function (resolve, reject) {
//     const url = options.url;
//     const target = options.path;
//     const args = ['clone', url, target];
//     const process = spawn('git', args);
//     process.on('close', function (code) { // Should probably be 'exit', not 'close'
//       // *** Process completed
//       resolve(code);
//     });
//     process.on('error', function (err) {
//       // *** Process creation failed
//       reject(err);
//     });
//   });
// }

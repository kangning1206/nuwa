#!/usr/bin/env node

/*
 * @Author: kangning1206
 * @Date:   2018-12-27 14:58:11
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-12-27 19:28:52
 */

// exec: [Function],
// execFile: [Function],
// spawn: [Function],
// spawnSync: [Function: spawnSync],
// execFileSync: [Function: execFileSync],
// execSync: [Function: execSync] }

const { spawn, spawnSync, exec } = require('child_process');
const inquirer = require('./inquirer');

// const c = require('child_process');
// console.log(c)

function git(name, options) {
  // spawn('vue', ['create', name], {
  //     stdio: 'inherit'
  // });
  inquirer.askGit().then(function(data) {
    const optType = data.optType;
    if (optType == 'commit') {
      spawn('git', ['add', '.']);
      spawn('git', ['commit', '-m', 'auto commit by nuwa']);
    } else if (optType == 'push') {
      spawn('git', ['push', 'origin'], {
        stdio: 'inherit'
      });
    }
  });

}




module.exports = git;

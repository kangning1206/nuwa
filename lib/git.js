#!/usr/bin/env node

/*
 * @Author: kangning1206
 * @Date:   2018-12-27 14:58:11
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-12-27 19:43:48
 */

// exec: [Function],
// execFile: [Function],
// spawn: [Function],
// spawnSync: [Function: spawnSync],
// execFileSync: [Function: execFileSync],
// execSync: [Function: execSync] }

const { spawn, spawnSync, exec } = require('child_process');
const inquirer = require('./inquirer');


// async function aa(){}

function git(name, options) {
  // spawn('vue', ['create', name], {
  //     stdio: 'inherit'
  // });
  inquirer.askGit().then(async function(data) {
    const optType = data.optType;
    if (optType == 'commit') {
     await spawn('git', ['add', '.']);
     await spawn('git', ['commit', '-m', `auto commit by nuwa at${new Date().toLocaleString}`]);
    } else if (optType == 'push') {
     await spawn('git', ['push', 'origin'], {
        stdio: 'inherit'
      });
    }
  });

}




module.exports = git;

/*
 * @Author: knb
 * @Date:   2018-12-26 18:39:04
 * @Last Modified by:   knb
 * @Last Modified time: 2018-12-26 18:54:21
 */

const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  getCurrentDirectory: () => {
    return process.cwd();
  },

  directoryExists: (filePath) => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};

/*
* @Author: kangning1206
* @Date:   2018-12-26 20:14:15
* @Last Modified by:   kangning1206
* @Last Modified time: 2018-12-26 20:14:55
*/

/*
 * @Author: knb
 * @Date:   2018-12-26 18:38:03
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-12-26 19:57:19
 */

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./files');
const inquirer = require('./inquirer');

//清空控制台
clear();


// 画字符
console.log(chalk.yellow(figlet.textSync('NuWa')));

// 如果存在 .git 目录，则git已经初始化，process.exit() 退出，后边不在执行
if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repository!'));
  // process.exit();
}

console.log(files.getCurrentDirectoryBase())
console.log(files.getCurrentDirectory())


const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log('返回的结果=',credentials);
}

run();
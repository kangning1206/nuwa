/*
 * @Author: kangning1206
 * @Date:   2018-12-27 14:15:17
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-12-27 14:47:03
 */

const fs = require('fs');



// 1. fs.stat  检测是文件还是目录(目录 文件是否存在) 
// 2. fs.mkdir  创建目录 （创建之前先判断是否存在） 
// 3. fs.writeFile  写入文件(文件不存在就创建,但不能创建目录) 
// 4. fs.appendFile 写入追加文件 
// 5.fs.readFile 读取文件 
// 6.fs.readdir 读取目录 
// 7.fs.rename 重命名 
// 8. fs.rmdir  删除目录 
// 9. fs.unlink 删除文件 


const { spawn, exec } = require('child_process');

function addpage(name, options) {
  // console.log(arguments);
  // const ls = spawn('ls', ['-lh', '/usr']);

  // ls.stdout.on('data', (data) => {
  //   console.log(`输出：${data}`);
  // });

  // fs.mkdir('')

  // exec('touch')

  // console.log(process.cwd())
  let aaa = fs.readFileSync('./package.json','utf8');
  console.log(aaa)

}




module.exports = addpage;

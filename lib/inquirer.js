/*
 * @Author: knb
 * @Date:   2018-12-26 18:39:04
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-12-26 20:13:17
 */

const inquirer = require('inquirer');
const files = require('./files');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      // {
      //   name: 'username',
      //   type: 'input',
      //   message: 'Enter your GitHub username or e-mail address:',
      //   validate: function( value ) {
      //     if (value.length) {
      //       return true;
      //     } else {
      //       return 'Please enter your username or e-mail address.';
      //     }
      //   }
      // },
      // {
      //   name: 'password',
      //   type: 'password',
      //   message: 'Enter your password:',
      //   validate: function(value) {
      //     if (value.length) {
      //       return true;
      //     } else {
      //       return 'Please enter your password.';
      //     }
      //   }
      // },
      {
        name: 'name', // 数据字段名称
        type: 'input', //类型，手动输入
        message: '你叫什么名字？', // 提示
        default: '三毛', // 默认值
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return '不可以为空，请输入';
          }
        }
      },

      {
        type: "checkbox",
        message: "选择颜色:",
        name: "color",
        choices: [{
            name: "red"
          },
          {
            name: "blur",
            checked: true // 默认选中
          },
          {
            name: "green"
          },
          {
            name: "yellow"
          }
        ]
      },

      {
        name: 'proType',
        type: 'list', //rawlist
        choices: function() {
          return ['Choice A', 'choice B', 'choice C', 'choice D', 'choice E'];
        },
        message: '项目类型:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
          }
        },
        filter: function(value) {
          return value.toUpperCase();
        }
      },
      {
        name: '密码',
        type: 'password',
        message: 'Enter your password:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
      },
      // {
      //     type: "editor",
      //     message: "请输入备注(使用vm快捷键退出)：",
      //     default:'',
      //     name: "editor"
      // }
    ];
    // promise 对象
    return inquirer.prompt(questions);
  }
};

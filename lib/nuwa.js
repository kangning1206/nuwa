#!/usr/bin/env node
/*
* @Author: kangning1206
* @Date:   2018-12-27 11:45:00
* @Last Modified by:   kangning1206
* @Last Modified time: 2018-12-27 20:00:19
*/

const chalk = require('chalk');
const semver = require('semver');
const program = require('commander');
const figlet = require('figlet');

const pkg = require('../package.json');

const requiredVersion = pkg.engines.node;

// welcome
console.log(figlet.textSync('nuwa', { horizontalLayout: 'full' }));

function checkNodeVersion(wanted, id) {
  if (!semver.satisfies(process.version, wanted)) {
    console.log(
      chalk.red(
        'You are using Node ' +
          process.version +
          ', but this version of ' +
          id +
          ' requires Node ' +
          wanted +
          '.\nPlease upgrade your Node version.'
      )
    );
    process.exit(1);
  }
}

function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

function cleanArgs(cmd) {
  const args = {};
  cmd.options.forEach(o => {
    const key = camelize(o.long.replace(/^--/, ''));
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
      args[key] = cmd[key];
    }
  });
  return args;
}

// 检查 node 版本是否符合当前要求
checkNodeVersion(requiredVersion, 'nuwa');

// const fs = require('fs')
// const path = require('path')
// const slash = require('slash')
// const minimist = require('minimist')

// // enter debug mode when creating test repo
// if (
//   slash(process.cwd()).indexOf('/packages/test') > 0 && (
//     fs.existsSync(path.resolve(process.cwd(), '../@vue')) ||
//     fs.existsSync(path.resolve(process.cwd(), '../../@vue'))
//   )
// ) {
//   process.env.VUE_CLI_DEBUG = true
// }

// const loadCommand = require('../lib/util/loadCommand')

program.version(pkg.version, '-v --version').usage('<command> [options]');

program
  .command('addpage <page-name>')
  .description('[新增vue页面，及相关文件]')
  .option('-p, --preset <presetName>', '参数1')
  .action((name, cmd) => {
    // 获取参数

    const options = cleanArgs(cmd);
    // console.log(name,options)

    // --git makes commander to default git to true
    // if (process.argv.includes('-g') || process.argv.includes('--git')) {
    //   options.forceGit = true
    // }
    // nuwa create demo-vue
    require('../lib/addpage')(name, options);
  });

// git多步骤操作
program
  .command('git')
  .description('本地commit和push服务器')
  .option('-c, --commit <commitMsg>', '备注信息')
  .action((name, cmd) => {
    if (!cmd) {
      cmd = name;
      name = '';
    }
    // 获取参数
    // debugger
    const options = cleanArgs(cmd);
    require('../lib/git')(options);
  });


program
  .command('create <app-name>')
  .description('[新建Vue项目]')
  .option('-p, --preset <presetName>', '参数1')
  .action((name, cmd) => {
    // 获取参数
    const options = cleanArgs(cmd);
    // console.log(name,options)

    // --git makes commander to default git to true
    // if (process.argv.includes('-g') || process.argv.includes('--git')) {
    //   options.forceGit = true
    // }
    // action 执行
    require('../lib/create')(name, options);
  });

// program
//   .command('add <plugin> [pluginOptions]')
//   .description('install a plugin and invoke its generator in an already created project')
//   .option('--registry <url>', 'Use specified npm registry when installing dependencies (only for npm)')
//   .allowUnknownOption()
//   .action((plugin) => {
//     require('../lib/add')(plugin, minimist(process.argv.slice(3)))
//   })

// program
//   .command('invoke <plugin> [pluginOptions]')
//   .description('invoke the generator of a plugin in an already created project')
//   .option('--registry <url>', 'Use specified npm registry when installing dependencies (only for npm)')
//   .allowUnknownOption()
//   .action((plugin) => {
//     require('../lib/invoke')(plugin, minimist(process.argv.slice(3)))
//   })

// program
//   .command('inspect [paths...]')
//   .description('inspect the webpack config in a project with vue-cli-service')
//   .option('--mode <mode>')
//   .option('--rule <ruleName>', 'inspect a specific module rule')
//   .option('--plugin <pluginName>', 'inspect a specific plugin')
//   .option('--rules', 'list all module rule names')
//   .option('--plugins', 'list all plugin names')
//   .option('-v --verbose', 'Show full function definitions in output')
//   .action((paths, cmd) => {
//     require('../lib/inspect')(paths, cleanArgs(cmd))
//   })

// program
//   .command('serve [entry]')
//   .description('serve a .js or .vue file in development mode with zero config')
//   .option('-o, --open', 'Open browser')
//   .option('-c, --copy', 'Copy local url to clipboard')
//   .action((entry, cmd) => {
//     loadCommand('serve', '@vue/cli-service-global').serve(entry, cleanArgs(cmd))
//   })

// program
//   .command('build [entry]')
//   .description('build a .js or .vue file in production mode with zero config')
//   .option('-t, --target <target>', 'Build target (app | lib | wc | wc-async, default: app)')
//   .option('-n, --name <name>', 'name for lib or web-component mode (default: entry filename)')
//   .option('-d, --dest <dir>', 'output directory (default: dist)')
//   .action((entry, cmd) => {
//     loadCommand('build', '@vue/cli-service-global').build(entry, cleanArgs(cmd))
//   })

// program
//   .command('ui')
//   .description('start and open the vue-cli ui')
//   .option('-H, --host <host>', 'Host used for the UI server (default: localhost)')
//   .option('-p, --port <port>', 'Port used for the UI server (by default search for available port)')
//   .option('-D, --dev', 'Run in dev mode')
//   .option('--quiet', `Don't output starting messages`)
//   .option('--headless', `Don't open browser on start and output port`)
//   .action((cmd) => {
//     checkNodeVersion('>=8.6', 'vue ui')
//     require('../lib/ui')(cleanArgs(cmd))
//   })

// program
//   .command('init <template> <app-name>')
//   .description('generate a project from a remote template (legacy API, requires @vue/cli-init)')
//   .option('-c, --clone', 'Use git clone when fetching remote template')
//   .option('--offline', 'Use cached template')
//   .action(() => {
//     loadCommand('init', '@vue/cli-init')
//   })

// program
//   .command('config [value]')
//   .description('inspect and modify the config')
//   .option('-g, --get <path>', 'get value from option')
//   .option('-s, --set <path> <value>', 'set option value')
//   .option('-d, --delete <path>', 'delete option from config')
//   .option('-e, --edit', 'open config with default editor')
//   .option('--json', 'outputs JSON result only')
//   .action((value, cmd) => {
//     require('../lib/config')(value, cleanArgs(cmd))
//   })

// program
//   .command('upgrade [semverLevel]')
//   .description('upgrade vue cli service / plugins (default semverLevel: minor)')
//   .action((semverLevel, cmd) => {
//     loadCommand('upgrade', '@vue/cli-upgrade')(semverLevel, cleanArgs(cmd))
//   })

// program
//   .command('info')
//   .description('print debugging information about your environment')
//   .action((cmd) => {
//     console.log(chalk.bold('\nEnvironment Info:'))
//     require('envinfo').run(
//       {
//         System: ['OS', 'CPU'],
//         Binaries: ['Node', 'Yarn', 'npm'],
//         Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
//         npmPackages: '/**/{*vue*,@vue/*/}',
//         npmGlobalPackages: ['@vue/cli']
//       },
//       {
//         showNotFound: true,
//         duplicates: true,
//         fullTree: true
//       }
//     ).then(console.log)
//   })

// // output help information on unknown commands
// program
//   .arguments('<command>')
//   .action((cmd) => {
//     program.outputHelp()
//     console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
//     console.log()
//   })

// // add some useful info on help
// program.on('--help', () => {
//   console.log()
//   console.log(`  Run ${chalk.cyan(`vue <command> --help`)} for detailed usage of given command.`)
//   console.log()
// })

// program.commands.forEach(c => c.on('--help', () => console.log()))

// // enhance common error messages
// const enhanceErrorMessages = require('../lib/util/enhanceErrorMessages')

// enhanceErrorMessages('missingArgument', argName => {
//   return `Missing required argument ${chalk.yellow(`<${argName}>`)}.`
// })

// enhanceErrorMessages('unknownOption', optionName => {
//   return `Unknown option ${chalk.yellow(optionName)}.`
// })

// enhanceErrorMessages('optionMissingArgument', (option, flag) => {
//   return `Missing required argument for option ${chalk.yellow(option.flags)}` + (
//     flag ? `, got ${chalk.yellow(flag)}` : ``
//   )
// })

// 必须执行，否则 program 设置无效
program.parse(process.argv);

// if (!process.argv.slice(2).length) {
//   program.outputHelp()
// }

// function camelize (str) {
//   return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
// }

// // commander passes the Command object itself as options,
// // extract only actual options into a fresh object.
// function cleanArgs (cmd) {
//   const args = {}
//   cmd.options.forEach(o => {
//     const key = camelize(o.long.replace(/^--/, ''))
//     // if an option is not present and Command has a method with the same name
//     // it should not be copied
//     if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
//       args[key] = cmd[key]
//     }
//   })
//   return args
// }

function entry() {}
module.exports = entry;

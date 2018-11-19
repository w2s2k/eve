#!/usr/bin/env node
const program = require('commander');
const modules = require('./modules');
const {app} = require('./constants');


program
  .version(app.version,'-v, --version')
  .description(app.description)
  .usage('[options] [command]')
  

program
  .command(modules.init.command)
  .alias(modules.init.alias)
  .description(modules.init.description)
  .action(modules.init.action);

program.on('--help', function(){
  console.log('');
  console.log('Examples:');
  console.log('  $ eve init');
  console.log('');
});

program
    .parse(process.argv);
    
if (!program.args.length) modules.init.action();

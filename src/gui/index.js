const chalk       = require('chalk');
const figlet       = require('figlet');
const {app}  = require('../constants');
const banner = () =>{
    console.log(
      chalk.hex('#03A9F4')(
        figlet.textSync(app.name.toUpperCase(), {
          horizontalLayout: 'default',
          verticalLayout: 'default' 
        })
      )
    );
  }
  
const status = (module) =>{
  
    const {name,type,framework,version} = module;
    console.log(`${chalk.hex('#03A9F4')('Current module loaded')} 
    ${chalk.green(type)}: ${chalk.green(name)} (${chalk.green(framework)}) ${chalk.green('v'+version)}
    `);  
}
  

  module.exports = {
    banner,
    status
}
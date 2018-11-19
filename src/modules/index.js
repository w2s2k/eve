const chalk       = require('chalk');
const clear = require('clear');
const inquirer = require('./inquirer');
const {config}    = require('../constants')
const {files,utils} = require('../tools');
const gui = require('../gui');

const init = () => {
    return {
        command: 'init',
        alias: 'i',
        description: 'Initializes the configuration of a module',
        action: () =>{
            clear();
            gui.banner();
            const started = utils.checkModule();
            if(started){
                const module = utils.getCurrentModule();
                gui.status(module)
            }else{
                console.log(chalk.green('Initializing Module...'));
                inquirer.askModule().then((answares)=>{
                    files.writeFile(config.FileName,answares);
                    console.log(chalk.green('New module initialized...'));
                }).catch((err)=>{
                    console.error(chalk.red(err));
                })
            }
            
        }
    }
}

module.exports = {
    init : init ()
}
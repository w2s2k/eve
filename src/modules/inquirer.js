const {prompt}    = require('inquirer');
const {modules}    = require('../constants');
const client = require('./client');
module.exports = {
    askModule: () =>{
        const questions = [
            {
                type: 'list',
                name: 'type',
                message: 'Module Type:',
                choices: modules,
                default: 'client'
            },
            {
                type: 'input',
                name: 'name',
                message: 'Module Name:',
                validate: function( value ) {
                    if (value.length) {
                      return true;
                    } else {
                      return 'Please enter your module name';
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Module Description:'
            },
            {
                type: 'input',
                name: 'author',
                message: 'Module Author:'
            },
            ...client.questions,
            {
                type: 'input',
                name: 'repo',
                message: 'Repository Url:',
                validate: function( value ) {
                    if (!value.length || require('is-git-url')(value)) {
                      return true;
                    } else {
                      return 'Please enter a valid git url';
                    }
                }
            },
            {
                type: 'input',
                name: 'version',
                message: 'Module Version:',
                default: '0.1.0',
            }
        ];
        return prompt(questions);
    }
};

const {plataforms}    = require('../../constants');
const nodejs    = require('./nodejs');

module.exports = [{
    when: function (response) {
      return response.type =='client';
    },
    type: 'list',
    name: 'plataform',
    message: 'Plataform:',
    choices: plataforms,
    default: plataforms['nodeJs']
  },
  ...nodejs.questions  
];

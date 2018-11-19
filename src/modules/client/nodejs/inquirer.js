const {frameworks}    = require('../../../constants');

module.exports = [
      {
        when: function (response) {
          return response.plataform =='nodeJs';
        },
        type: 'list',
        name: 'framework',
        message: 'Framework:',
        choices: frameworks.sort(),
        default: frameworks['react']
      }
];

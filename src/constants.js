const app = require('../package.json')



module.exports = {
  app: app,
  config: {
    FileName: app.name+'.module.json'
  },
  plataforms:['nodeJs'],
  frameworks:['react'],
  modules:['client']
}
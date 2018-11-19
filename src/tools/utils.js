const {config}  = require('../constants');
const files       = require('./files');

const checkModule = () =>{
    if (files.fileExists(config.FileName)) {
        return true
    }else{
        return false
    }
}

const getCurrentModule =() =>{
    return files.getFile(config.FileName)
}

module.exports = {
    checkModule,
    getCurrentModule
}
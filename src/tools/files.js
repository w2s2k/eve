const fs = require('fs');
const path = require('path');

const getCurrentDirectory = () => {
  return process.cwd();
};

const getCurrentDirectoryBase = () => {
  return path.basename(getCurrentDirectory());
};

const getFilePath = (fileName,dir=getCurrentDirectory()) => {
  return  path.format({
    dir: dir,
    base: fileName
  });
};
const getFile = (fileName,dir=getCurrentDirectory()) => {
  return require(getFilePath(fileName,dir))
};

const directoryExists = (filePath) => {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
};

const fileExists = (fileName,dir=getCurrentDirectory()) => {
  try {
    if (fs.existsSync(getFilePath(fileName,dir))) {
      return true
    }
    return false
  } catch(err) {
    console.error(chalk.red(err))
  }
};

const writeFile = (fileName,data='',dir=getCurrentDirectory()) =>{
  fs.writeFile(fileName, data ? JSON.stringify(data,null, 2) : data,'utf8', function (err, file) {
    if (err) throw err;
  });
};

module.exports = {
  getCurrentDirectoryBase,
  directoryExists,
  fileExists,
  writeFile,
  getFile
};
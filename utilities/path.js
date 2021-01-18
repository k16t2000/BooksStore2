const path = require('path');

//console.log(path.dirname(require.main.filename));//require.main.filename=it is the name of our project,
//which  is visible in console

module.exports = path.dirname(require.main.filename);
//main.filename-directory of the file responsible for running for application
//require.main.filename=it is the name of our project,
//which  is visible in console(absolute path)

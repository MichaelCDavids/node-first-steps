// Chalk Greeting

// const chalk = require('chalk');
// //import the greet module that is in the current folder
// const greet = require('./greet');

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage);


// Text with Figlet
var figlet = require('figlet');

figlet.text('Michael', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

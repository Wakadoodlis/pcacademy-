let fs = require('fs');


function read() {
fs.readFile('demo.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
}
read();
module.exports = read;

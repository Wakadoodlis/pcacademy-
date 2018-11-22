let fs = require('fs');
let readline = require('readline');


function write() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const flag = process.argv[2];
    if (flag === '-a' || flag === '--a') {
        rl.question('Irasykite savo teksta ', (answer) => {
            fs.appendFile("demo.txt", `\n ${answer}`, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(answer);
            });
            rl.close();
        });
    } else {
        rl.question('Irasykite savo teksta ', (answer) => {
            fs.writeFile("demo.txt", answer, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(answer);
            });
            rl.close();
        });
    }

}
write();
module.exports = write;
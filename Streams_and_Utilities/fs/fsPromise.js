const fs = require('fs/promises');

const readFilePromise = fs.readFile('./input.txt', 'utf-8');

readFilePromise.then((data) => {
    return fs.writeFile('./output.txt', data, 'utf-8')
}).then(() => {
    console.log('file is saved');
}).catch(err => console.log('error'))
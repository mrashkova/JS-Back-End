const fs = require('fs');

const text = 'Akai, Alesis, Headrush';
fs.writeFile('./output.txt', text, 'utf-8', (err) => {
    if (err) {
        console.log('unsuccessful file saving');
    }
    console.log('successfuly saved file');
} );
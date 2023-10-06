const fs = require('fs');
const path = require('path');

//copy
const readStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'));
const writeStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

// react on ReadStream's event
readStream.on('data', (chunk) => {
    // write in the stream
    writeStream.write(chunk)
})

readStream.on('end', () => {
    console.log('i have finished reading');
    writeStream.end();
})
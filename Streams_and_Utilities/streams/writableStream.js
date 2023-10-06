const fs = require('fs');

const writeStream = fs.createWriteStream('./output.txt');

writeStream.write('Chunk 1');
writeStream.write('Chunk 2');
writeStream.write('Chunk 3');
writeStream.write('Chunk 4');
writeStream.write('Chunk 5');
writeStream.write('Chunk 6');
writeStream.write('Chunk 7');
writeStream.end();

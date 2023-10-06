const { log } = require('console');
const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    const {method, url} = req;
    console.log('Server is running');
    console.log(url);
    console.log(method);

    res.writeHead(200, {
        'Content-Type': 'text/html',
    })

    res.write('Hello from web server updated');
    res.end();
});

server.listen(port);
console.log(`Server is listening on ${port}`);

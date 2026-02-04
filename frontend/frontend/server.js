// import http from 'http';
// const server =http.createServer((req, res) =>{
//     console.log('server1');
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hi this is my first server');
// })
// server.listen(3000, ()=>{
//     console.log('server is listening on port 3000');
// });

import http from 'http';
const PORT=5000;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const url = req.url;
    if (url === '/about') {
        res.write(' Welcome to about us page');
        res.end();
    }
    else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    }
    else {
        res.write('404 Not Found');
        res.end();
    }
}).listen(PORT, function () {
    console.log(`server start at port ${PORT}`);
});
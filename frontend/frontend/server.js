import http from 'http';
const server =http.createServer((req, res) =>{
    console.log('server1');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hi this is my first server');
})
server.listen(3000, ()=>{
    console.log('server is listening on port 3000');
});


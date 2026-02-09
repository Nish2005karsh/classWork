// import http from 'http';
// const server =http.createServer((req, res) =>{
//     console.log('server1');
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hi this is my first server');
// })
// server.listen(3000, ()=>{
//     console.log('server is listening on port 3000');
// });

// import http from 'http';
// const PORT=5000;
// import fs from 'fs';
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     const url = req.url;
//     if (url === '/about') {
//         res.write(' <h1>We are student of ABES EC</h1>');
//         // add the image
//         res.write('<img src="https://manage.collnod.com/Upload/Content/web_img_0_1_9_2023_12_42_12.gif" style="width: 700px; height: 350px;" alt="Placeholder Image">');
//         res.end();
//     }
//     else if (url === '/contact') {
//         res.write(' <h1>Welcome to contact us page</h1>');
//         res.end();
//     }
//     else if(url==='/class'){
//         res.write(' <h1>Hello, welcome to the hi page!</h1>');
//         res.end();
//     }

//     else {
//         res.write(' <h1>404 Not Found</h1>');
//         res.end();
//     }
// }).listen(PORT, function () {
//     console.log(`server start at port ${PORT}`);
// });
// import fs from 'fs';
// const PORT=4000;
// try{
//     fs.writeFileSync('./message.txt', 'We are student of IT.');
//     console.log('File written successfully');
// }
// catch(err){
//     console.error('Error writing file:', err);
// }
// Sync file read
// import fs from 'fs';
// // const PORT=4000;
// try{
//     const data=fs.readFileSync('./message.txt', 'utf-8');
//     console.log(data);
// }
// catch(err){
//     console.error('Error reading file:', err);
// }
// using async
// import fs from 'fs';

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });
// import fs from 'fs';
// // Write file
// fs.writeFile('example.txt', 'Hello.', (err) => {
//     if (err) {
//         console.error('Error writing file:', err);   
//         return;
//     }
//     console.log('File written successfully.');
// }); 
import fs from'fs';
fs.readFile('./example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});
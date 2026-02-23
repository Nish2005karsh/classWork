import http from 'http';
import fs from 'fs';
const homePage = fs.readFileSync('./index.html');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.end(homePage);

})
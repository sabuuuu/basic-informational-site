const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode=200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode=200;
            break;
        case '/contact-me':
            path += 'contact-me.html';
            res.statusCode=200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        res.end(data);
    });
});

server.listen(3000,'localhost',()=>{
    console.log('listening rn..');
})
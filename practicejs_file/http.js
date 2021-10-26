const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text.html'});
        res.write('<h1>welcome to the homepage</h1>');
        res.end();
    }
    if(req.url === '/user'){
        res.write('welcome to user page');
        res.end();
    }
});

server.listen(3000, () => console.log("Server is running"));
const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    switch (url) {
        case '/':
            res.writeHead(300, { 'Content-Type': 'text/html' });
            res.write('<h2>Ana Sayfa</h2>');
            break;
        case '/index':
            res.writeHead(300, { 'Content-Type': 'text/html' });
            res.write('<h1>Index Sayfasi</h1>');
            break;
        case '/hakkimda':
            res.writeHead(300, { 'Content-Type': 'text/html' });
            res.write(`<h1>Hakkimda Sayfasi</h1>`);
            break;
        case '/iletisim':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Iletisim Sayfasi</h1>');
            break;
        default:
            break;
    }

    res.end();

})

const port = 5000;

server.listen(port, () => {
    console.log(`Server ${port} portunda başlatıldı`);
})
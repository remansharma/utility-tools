const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
    secure: false, // Ignore SSL certificate errors
    changeOrigin: true, // Change the origin of the host header to the target URL
});

proxy.on('proxyReq', (proxyReq, req, res, options) => {
    console.log(`Proxying request to: ${req.url}`);
    console.log(`Request Headers: ${JSON.stringify(req.headers, null, 2)}`);
});

proxy.on('error', (err, req, res) => {
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
    console.error(err);
});

const server = http.createServer((req, res) => {
    proxy.web(req, res, { target: 'http://partner.bnt.in' });
});

console.log('Proxy server listening on port 8000');
server.listen(8000);

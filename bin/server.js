const Express = require("express");
const app = require('../src/app.js');
const debug = require('debug')('nodestr:server');
const http = require('http');


// resgastando a porta
const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

// Criando o server na porta indicada acima 
const server = http.createServer(app);
server.listen(port, () => {
    console.log('API acabou de ser iniciada na porta', port);
})
server.on('listening', onListening);

// Normalizando a porta 
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }
    return false;
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;

    debug('listenng on' + bind);
}
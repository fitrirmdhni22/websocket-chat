const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (ws) => {
    console.log('Ada client terhubung');

    ws.on('message', (message) => {
        console.log('Pesan masuk:', message.toString());

        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on('close', () => {
        console.log('Client keluar');
    });
});

console.log('Server aktif di ws://localhost:3000');
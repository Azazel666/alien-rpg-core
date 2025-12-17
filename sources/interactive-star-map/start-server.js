#!/usr/bin/env node
/**
 * Simple HTTP Server for Middle Heavens Map
 * Run this script in the same folder as your HTML files.
 * 
 * Usage: node start-server.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './middle-heavens-viewer.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-store'
            });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Starting server at http://localhost:${PORT}`);
    console.log(`Serving files from: ${__dirname}`);
    console.log('\nOpen one of these URLs in your browser:');
    console.log(`  Editor:  http://localhost:${PORT}/middle-heavens-editor.html`);
    console.log(`  Viewer:  http://localhost:${PORT}/middle-heavens-viewer.html`);
    console.log('\nPress Ctrl+C to stop the server');
});
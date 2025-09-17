#!/usr/bin/env node

/**
 * Simple HTTP Server for local development
 * Usage: node server.js [port]
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const DEFAULT_PORT = 8000;
const port = process.argv[2] || DEFAULT_PORT;

// MIME type mapping
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
};

const server = http.createServer((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;

    // Remove leading slash and resolve path
    pathname = pathname === '/' ? '/index.html' : pathname;
    const filePath = path.join(__dirname, pathname);

    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`
                <html>
                    <head><title>404 - Not Found</title></head>
                    <body>
                        <h1>404 - File Not Found</h1>
                        <p>The requested file <code>${pathname}</code> was not found.</p>
                        <p><a href="/">Go back to home</a></p>
                    </body>
                </html>
            `);
            return;
        }

        // Get file extension and MIME type
        const ext = path.extname(filePath);
        const mimeType = mimeTypes[ext] || 'application/octet-stream';

        // Read and serve file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>500 - Server Error</title></head>
                        <body>
                            <h1>500 - Internal Server Error</h1>
                            <p>Error reading file: ${err.message}</p>
                        </body>
                    </html>
                `);
                return;
            }

            // Set appropriate headers
            const headers = {
                'Content-Type': mimeType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            };

            res.writeHead(200, headers);
            res.end(data);
        });
    });
});

server.listen(port, () => {
    console.log(`🚀 CV Website Server running at:`);
    console.log(`   Local:   http://localhost:${port}`);
    console.log(`   Network: http://127.0.0.1:${port}`);
    console.log('');
    console.log('Press Ctrl+C to stop the server');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n👋 Server shutting down gracefully...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\n👋 Server shutting down gracefully...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});

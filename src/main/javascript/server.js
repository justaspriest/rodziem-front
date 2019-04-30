'use strict'

const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';
const TEMPLATE_HTML_PAGE = path.resolve(__dirname, 'index.html');
const STATIC_RESOURCE_DIRECTORY = path.resolve(__dirname, 'resources');

const handleRequest = (req, res) => {
	const readStream = fs.createReadStream(TEMPLATE_HTML_PAGE);
	readStream
		.on('data', chunk => res.write(chunk))
		.on('end', () => res.end());
};

const app = express();
app.use(express.static(STATIC_RESOURCE_DIRECTORY))
app.get('/', handleRequest);
app.listen(PORT);

console.log(`Running on http://${HOST}:${PORT}`);

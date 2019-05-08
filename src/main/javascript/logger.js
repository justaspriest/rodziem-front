const winston = require('winston');

const transports = new winston.transports.Console();
const logger = winston.createLogger({
    transports: [transports]
});

module.exports = logger;

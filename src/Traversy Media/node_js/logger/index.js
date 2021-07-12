const Logger = require(`./logger.js`);
const logger = new Logger();

logger.on("message", (data) => console.log("Called listener:", data));

logger.log("hello World!!!");
logger.log("hello World!!!");
logger.log("hello World!!!");
logger.log("hello World!!!");

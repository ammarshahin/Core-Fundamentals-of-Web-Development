const event = require(`events`);

// create class
class emitter extends event {}

// init object
const myEmitter = new emitter();

// event listener
myEmitter.on("event", () => console.log(`Event Fired !!!`));

// init Event
myEmitter.emit(`event`);
myEmitter.emit(`event`);
myEmitter.emit(`event`);
myEmitter.emit(`event`);

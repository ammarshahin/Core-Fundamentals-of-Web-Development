const event = require(`events`);
const uuid = require(`uuid`);

class logger extends event {
  log(msg) {
    // call event
    this.emit(`message`, { id: uuid.v4(), msg });
  }
}

module.exports = logger;

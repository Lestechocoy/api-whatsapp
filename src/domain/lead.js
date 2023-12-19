const { v4: uuid } = require("uuid");

class Lead {
  constructor({ message, phone }) {
    this.uuid = uuid();
    this.message = message;
    this.phone = phone;
  }
}

module.exports = { Lead };

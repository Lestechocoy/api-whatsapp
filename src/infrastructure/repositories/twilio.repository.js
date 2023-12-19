require("dotenv").config();
const { Twilio } = require("twilio");
const LeadExternal = require("../../domain/lead-external.repository");

const accountSid = process.env.TWILIO_SID || "";
const authToken = process.env.TWILIO_TOKEN || "";
const fromNumber = process.env.TWILIO_FROM || "";

class TwilioService extends Twilio {
  constructor() {
    super(accountSid, authToken);
  }
  
  async sendMsg({ message, phone }) {
    try {
      const parsePhone = `+${phone}`;
      const mapMsg = { body: message, to: parsePhone, from: fromNumber };
      const response = await this.messages.create(mapMsg);
      return response;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
}

module.exports = TwilioService;

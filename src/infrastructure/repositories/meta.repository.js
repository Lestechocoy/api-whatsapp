require("dotenv").config();
const axios = require("axios");

const META_TOKEN = process.env.META_TOKEN || "";
const META_ID_NUMBER = process.env.META_ID_NUMBER || "";
const URL = `https://graph.facebook.com/v13.0/${META_ID_NUMBER}/messages`;

class MetaRepository {
  async sendMsg({ message, phone }) {
    try {
      const body = this.parseBody({ message, phone });
      const response = await axios.post(URL, body, {
        headers: {
          Authorization: `Bearer ${META_TOKEN}`,
        },
      });

      return response.data;
    } catch (e) {
      return e;
    }
  }

  parseBody({ message, phone }) {
    const body = {
      messaging_product: "whatsapp",
      to: phone,
      type: "template",
      template: {
        name: "hello_world",
        language: {
          code: "en_US",
        },
      },
    };
    return body;
  }
}

module.exports = MetaRepository;

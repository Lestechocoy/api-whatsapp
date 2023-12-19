const { Client, LocalAuth } = require("whatsapp-web.js");
const qr = require("qr-image");
const LeadExternal = require("../../domain/lead-external.repository");
const fs = require("fs");

class WsTransporter extends Client {
  constructor() {
    super({
      authStrategy: new LocalAuth(),
      puppeteer: {
        headless: true,
        args: [
          "--disable-setuid-sandbox",
          "--unhandled-rejections=strict",
        ],
      },
    });

    console.log("Iniciando....");

    this.initialize();

    this.status = false;

    this.on("ready", () => {
      this.status = true;
      console.log("LOGIN_SUCCESS");
    });

    this.on("auth_failure", () => {
      this.status = false;
      console.log("LOGIN_FAIL");
    });

    this.on("qr", (qrCode) => {
      console.log("Escanea el codigo QR que esta en la carpeta tmp");
      this.generateImage(qrCode);
    });
  }

  async sendMsg(lead) {
    try {
      if (!this.status) return Promise.resolve({ error: "WAIT_LOGIN" });
      const { message, phone } = lead;
      const response = await this.sendMessage(`${phone}@c.us`, message);
      return { id: response.id.id };
    } catch (e) {
      return Promise.resolve({ error: e.message });
    }
  }

  getStatus() {
    return this.status;
  }

  generateImage(base64) {
    const path = `${process.cwd()}/src/img`;
    let qrSvg = qr.image(base64, { type: "svg", margin: 4 });
    qrSvg.pipe(fs.createWriteStream(`${path}/qr.svg`));
    console.log(`⚡ Recuerda que el QR se actualiza cada minuto ⚡`);
    console.log(`⚡ Actualiza F5 el navegador para mantener el mejor QR ⚡`);
  }
}

module.exports = WsTransporter;

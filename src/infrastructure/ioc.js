const { ContainerBuilder } = require("node-dependency-injection");
const { LeadCreate } = require("../application/lead.create");
const LeadCtrl = require("./controller/lead.ctrl");
const MetaRepository = require("./repositories/meta.repository");
const MockRepository = require("./repositories/mock.repository");
const TwilioService = require("./repositories/twilio.repository");
const WsTransporter = require("./repositories/ws.external");

const container = new ContainerBuilder();

container.register("ws.transporter", WsTransporter);
const wsTransporter = container.get("ws.transporter");

container.register("db.repository", MockRepository);
const dbRepository = container.get("db.repository");

container
  .register("lead.creator", LeadCreate)
  .addArgument([dbRepository, wsTransporter]);

const leadCreator = container.get("lead.creator");

container.register("lead.ctrl", LeadCtrl).addArgument(leadCreator);

module.exports = container;

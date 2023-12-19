const LeadExternal = require("../domain/lead-external.repository");
const LeadRepository = require("../domain/lead.repository");

class LeadCreate {
  constructor(repositories) {
    const [leadRepository, leadExternal] = repositories;
    this.leadRepository = leadRepository;
    this.leadExternal = leadExternal;
  }

  async sendMessageAndSave({ message, phone }) {
    const responseDbSave = await this.leadRepository.save({ message, phone }); //TODO DB
    const responseExSave = await this.leadExternal.sendMsg({ message, phone }); //TODO enviar a ws
    return { responseDbSave, responseExSave };
  }
}

module.exports = { LeadCreate };

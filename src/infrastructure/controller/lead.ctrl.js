const { Request, Response } = require("express");
const { LeadCreate } = require("../../application/lead.create");

class LeadCtrl {
  constructor(leadCreator) {
    this.leadCreator = leadCreator;
    this.sendCtrl = async ({ body }, res) => {
      const { message, phone } = body;
      const response = await this.leadCreator.sendMessageAndSave({ message, phone });
      res.send(response);
    };
  }
}

module.exports = LeadCtrl;

let objID = require("mongodb").ObjectID;
const Objetivo = require("../model/Objetivo");
class ObjetivoController {
  async store(req, res) {
    const data = await Objetivo.create(req.body);
    return res.json(data);
  }
  async list(req, res) {
    const data = await Objetivo.find({});
    return res.json(data);
  }
  async delete(req, res) {
    const { id } = req.body;
    const data = await Objetivo.deleteMany({ _id: objID(id) });
    return res.json(data);
  }
}
module.exports = new ObjetivoController();

let objID = require("mongodb").ObjectID;
const Local = require("../model/Local");
class LocalController {
  async store(req, res) {
    const data = await Local.create(req.body);
    return res.json(data);
  }
  async list(req, res) {
    const data = await Local.find({});
    return res.json(data);
  }
  async delete(req, res) {
    const { id } = req.body;
    const data = await Local.deleteMany({ _id: objID(id) });
    return res.json(data);
  }
}
module.exports = new LocalController();

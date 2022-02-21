const mongoose = require("mongoose");
const ObjetivoSchema = new mongoose.Schema(
  {
    descricao: {
      type: String,
      required: true,
    },
    pontos: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Objetivo", ObjetivoSchema);

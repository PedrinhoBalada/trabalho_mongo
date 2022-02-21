const mongoose = require("mongoose");
const LocalSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    objetivo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Objetivo",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Local", LocalSchema);

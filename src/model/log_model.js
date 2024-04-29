const mongoose = require("mongoose");
const { stringify } = require("uuid");

const LogSchema = new mongoose.Schema(
  {
    guid: {
      type: String,
      required: true,
    },
    device: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required:true
    },
    timestamp: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const LogModel = mongoose.model("datarmq", LogSchema);

module.exports = LogModel;

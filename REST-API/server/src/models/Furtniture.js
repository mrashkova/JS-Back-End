const mongoose = require("mongoose");

const furtnitureSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  material: { type: String, required: true },
  _ownerId: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Furtniture = mongoose.model("Furniture", furtnitureSchema);

module.exports = Furtniture;

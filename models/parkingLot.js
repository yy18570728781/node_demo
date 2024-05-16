// 停车场模型
const mongoose = require("mongoose");

const parkingLotSchema = new mongoose.Schema({
  car_park_no: { type: String, required: true },
  address: { type: String, required: true },
  x_coord: { type: String },
  y_coord: { type: String },
  car_park_type: { type: String },
  type_of_parking_system: { type: String },
  short_term_parking: { type: String },
  free_parking: { type: String },
  night_parking: { type: String },
  car_park_decks: { type: String },
  gantry_height: { type: String },
  car_park_basement: { type: String },
  is_favorite: { type: Boolean, default: false },
});

module.exports = mongoose.model("ParkingLot", parkingLotSchema);

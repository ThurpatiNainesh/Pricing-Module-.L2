const mongoose = require('mongoose');

const PricingSchema = new mongoose.Schema({
  name: String,
  days: [String],
  baseDistanceKm: Number,
  basePrice: Number,
  additionalPricePerKm: Number,
  timeMultiplier: [{ from: Number, to: Number, multiplier: Number }],
  waitingChargePer3Min: Number,
  initialFreeWaitMins: Number,
  active: Boolean
}, { timestamps: true });

module.exports = mongoose.model('PricingConfig', PricingSchema);

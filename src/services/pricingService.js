const PricingConfig = require('../models/PricingConfig');

exports.getActiveConfigByDay = async (day) => {
  return await PricingConfig.findOne({ days: { $in: [day] }, active: true });
};

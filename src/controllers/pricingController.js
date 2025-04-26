const { validatePricingInput } = require('../utilis/validation');
const { calculatePrice } = require('../services/calculationService');
const pricingService = require('../services/pricingService');
const PricingConfig = require('../models/PricingConfig');

exports.calculate = async (req, res) => {
  try {
    const { distance, time, waitTime, day } = req.body;
    validatePricingInput(req.body);

    const config = await pricingService.getActiveConfigByDay(day);
    if (!config) return res.status(404).json({ message: "No active pricing config" });

    const price = calculatePrice({ distance, time, waitTime, config });
    res.json({ price });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createPricingConfig = async (req, res) => {
  try {
    const config = await PricingConfig.create(req.body);
    res.status(201).json({ message: "Pricing config created", data: config });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

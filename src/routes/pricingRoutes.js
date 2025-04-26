const express = require('express');
const router = express.Router();
const controller = require('../controllers/pricingController');

router.post('/calculate', controller.calculate);
router.post('/config', controller.createPricingConfig); // 👈 add this route

module.exports = router;

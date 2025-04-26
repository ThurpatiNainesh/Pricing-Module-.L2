require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const pricingRoutes = require('./src/routes/pricingRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/pricing', pricingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

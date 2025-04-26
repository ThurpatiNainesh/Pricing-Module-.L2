const mongoose = require('mongoose');

const AuditSchema = new mongoose.Schema({
  configId: mongoose.Schema.Types.ObjectId,
  actor: String,
  action: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AuditLog', AuditSchema);

const LogModel = require('../../model/log_model.js');

// Controller untuk mendapatkan semua data log
exports.getAllLogs = async (req, res) => {
  try {
    const logs = await LogModel.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const logController = require('../controller/apiController');

    router.get('/', logController.getAllLogs);

    app.use('/data', router);
}
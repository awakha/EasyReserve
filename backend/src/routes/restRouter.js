const express = require('express');
const router = express.Router();

const restController = require('../controllers/restController');

router.get('/:id', restController.getOne);

module.exports = router;

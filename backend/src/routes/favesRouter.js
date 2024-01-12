const express = require('express');
const router = express.Router();

const favesController = require('../controllers/favesController');

router.patch('/:restId', favesController.toggleFaves);
router.get('/', favesController.getFaves);

module.exports = router;

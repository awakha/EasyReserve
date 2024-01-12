const express = require('express');
const router = express.Router();

const mapController = require('../controllers/mapController');
const searchController = require('../controllers/searchController');

router.get('/', mapController.mapPage);

router.post('/search', searchController.searchComponent);

module.exports = router;

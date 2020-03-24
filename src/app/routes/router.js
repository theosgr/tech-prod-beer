const express = require('express');
const router = express.Router();

/* API routes */
router.use('/categorie', require('./api/categorieRoutes'));
router.use('/style', require('./api/styleRoutes'));
router.use('/beer', require('./api/beerRoutes'));
router.use('/brewery', require('./api/breweryRoutes'));
router.use('/search', require('./api/searchRoutes'));
router.use('/test', require('./api/testRoutes'));


module.exports = router;
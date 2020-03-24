const express = require('express');
const router = express.Router();

const SearchController = require('../../controller/searchController');
const searchController = new SearchController();

//new
router.get('/:lat/:long/:range', function (req, res) {
    searchController.findByCoordinates(req,res);
});

module.exports = router;
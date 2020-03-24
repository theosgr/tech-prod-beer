const express = require('express');
const router = express.Router();

const BreweryController = require('../../controller/breweryController');
const breweryController = new BreweryController();

//new
router.get('/', function (req, res) {
    breweryController.findAll(res);
});

//new
router.get('/:id', function (req, res) {
    breweryController.findById(req, res)
});

//new
router.get('/:id/beers', function (req, res) {
    breweryController.findBreweryBeers(req, res)
});

//new
router.get('/:country', function (req, res) {
    breweryController.findByCountry(req, res)
});

//new
router.get('/:state', function (req, res) {
    breweryController.findByState(req, res)
});
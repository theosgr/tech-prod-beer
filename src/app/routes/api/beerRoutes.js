const express = require('express');
const router = express.Router();

const BeerController = require('../../controller/beerController');
const beerController = new BeerController();

router.get('/', function (req, res) {
    beerController.findAll(res);
});

router.get('/:id', function (req, res) {
    beerController.findById(req, res)
});

router.get('/deg/:deg', function (req, res) {
    beerController.findByAlcoholOverDeg(req, res)
});


//new
router.get('/:cat_id/', function (req, res) {
    beerController.findByCategorieId(req, res)
});

//new
router.get('/:style_id/', function (req, res) {
    beerController.findByStyleId(req, res)
});



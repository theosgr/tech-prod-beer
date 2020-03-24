const express = require('express');
const router = express.Router();

const StyleController = require('../../controller/styleController');
const styleController = new StyleController();

//new
router.get('/', function (req, res) {
    styleController.findAll(res);
});

//new
router.get('/:id', function (req, res) {
    styleController.findById(req, res)
});

//new
router.get('/:cat_id', function (req, res) {
    styleController.findById(req, res)
});

//new
router.post('/', function (req, res) {
    styleController.create(req,res);
});

//new
router.put('/:id', function (req, res) {
    styleController.update(req, res)
});

//new
router.delete('/:id', function (req, res) {
    styleController.deleteById(req, res)
});
module.exports = router;
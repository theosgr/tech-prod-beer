/*Vérifier */

const BreweryDAO = require('../dao/breweryDAO');
const Brewery = require('../model/brewery');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

class BreweryController {

    constructor() {
        this.breweryDAO = new BreweryDAO();
        this.common = new ControllerCommon();
    }

    //new
    findAll(res) {
        this.breweryDAO.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    //new
    findById(req, res) {
        let id = req.params.id;
        this.breweryDAO.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /*
    //new
    findBreweryBeers(req, res) {
        let id = req.params.id;
        this.breweryDAO.findBreweryBeers(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    */

    //new
    findByCountry(req, res) {
        let country = req.params.country;
        this.breweryDAO.findByCountry(country)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    //new
    findByState(req, res) {
        let state = req.params.state;
        this.breweryDAO.findByState(state)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };




    
}


module.exports = BreweryController;
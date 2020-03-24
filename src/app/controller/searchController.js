const SearchDAO = require('../dao/searchDAO');
const Geocode = require('../model/geocode');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

class SearchController {

    constructor() {
        this.searchDAO = new SearchDAO();
        this.common = new ControllerCommon();
    }

    //new
    findByCoordinates(req, res) {
        let lat = req.params.lat;
        let long  = req.params.long;
        let range = req.params.range;
        this.searchDAO.findByCoordinates(lat,long,range)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

}


module.exports = BeerController;
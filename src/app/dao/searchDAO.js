const Geocode = require('../model/geocode');

const daoCommon = require('./commons/daoCommon');

class BreweryDAO{

    constructor() {
        this.common = new daoCommon();
    }

    //new
    findByCoordinates(lat, long, range) {
        const sqlRequest = "SELECT brewery_id FROM geocode where "+
        "$lat <= latitude + $range" +
        "$lat >= latitude - $range" +
        "$long <= latitude + $range" +
        "$long >= latitude - $range";
        let sqlParams ={$lat: lat, $long: long, $range: range};

        return this.common.findAllWithParams(sqlRequest, sqlParams)
            .then(rows => {
                const brewery = rows.map(row => new Brewery(row));
                return brewery;
            })
            .catch(err=> console.log(err));


            return this.commons.findAllWithParams(sqlRequest,sqlParams)
            .then(rows => {
                const beers = rows.map(row => new Beer(row));
                return beers;
            })
            .catch(err=> console.log(err));
    };

    



}

module.exports= BreweryDAO;
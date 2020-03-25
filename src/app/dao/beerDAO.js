/*Vérifier*/ 

const Beer = require('../model/beer');

const daoCommon = require('./commons/daoCommon');

class BeerDAO {

    constructor() {
        this.common = new daoCommon();
    }

    findAll() {
        const sqlRequest = "SELECT * FROM beer";

        return this.common.findAll(sqlRequest)
            .then(rows => {
                const beers = rows.map(row => new Beer(row));
                return beers;
            })
            .catch(err=> console.log(err));
    };

    findById(id) {
        let sqlRequest = "SELECT * FROM beer WHERE id=$id";
        let sqlParams = {$id: id};
        //console.log(sqlParams);
        return this.common.findOne(sqlRequest, sqlParams)
            .then(row => new Beer(row))

    };

    findByAlcoholOverDeg(deg){
        const sqlRequest = "SELECT * FROM beer where alcohol_by_volume >= $deg ";
        let sqlParams = {$deg: deg};
        return this.common.findAllWithParams(sqlRequest,sqlParams)
            .then(rows => {
                const beers = rows.map(row => new Beer(row));
                return beers;
            })
            .catch(err=> console.log(err));
    }

    //new
    findByCategorieId(cat_id){
        const sqlRequest = "SELECT * FROM beer where cat_id = $cat_id ";
        let sqlParams= {$cat_id: cat_id};
        return this.commons.findAllWithParams(sqlRequest,sqlParams)
        .then(rows => {
            const beers = rows.map(row => new Beer(row));
            return beers;
        })
        .catch(err=> console.log(err));
    }

    //new
    findByStyleId(style_id){
        const sqlRequest = "SELECT * FROM beer where style_id = $style_id ";
        let sqlParams= {$style_id: style_id};
        return this.commons.findAllWithParams(sqlRequest,sqlParams)
        .then(rows => {
            const beers = rows.map(row => new Beer(row));
            return beers;
        })
        .catch(err=> console.log(err));
    }
}

module.exports = BeerDAO;
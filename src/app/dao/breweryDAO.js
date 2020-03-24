const Brewery = require('../model/brewery');

const daoCommon = require('./commons/daoCommon');

class BreweryDAO{

    constructor() {
        this.common = new daoCommon();
    }

    //new
    findAll() {
        const sqlRequest = "SELECT * FROM brewery";

        return this.common.findAll(sqlRequest)
            .then(rows => {
                const brewery = rows.map(row => new Brewery(row));
                return brewery;
            })
            .catch(err=> console.log(err));
    };

    //new
    findById(id) {
        let sqlRequest = "SELECT * FROM brewery WHERE id=$id";
        let sqlParams = {$id: id};
        //console.log(sqlParams);
        return this.common.findOne(sqlRequest, sqlParams)
            .then(row => Brewery(row))

    };

    findBreweryBeers(id){
        let sqlRequest ="SELECT beers FROM brewery WHERE id=$id";
    }

    //new
    findByCountry(country){
        let sqlRequest = "SELECT * from brewery WHERE country=$country";
        let sqlParams ={$country: country};
        return this.common.findAllWithParams(sqlRequest,sqlParams)
            .then(row.Brewery(row))
    }

    //new
    findByState(state){
        let sqlRequest = "SELECT * from brewery WHERE state=$state";
        let sqlParams ={$state: state};
        return this.common.findAllWithParams(sqlRequest,sqlParams)
            .then(row.Brewery(row))
    }



}

module.exports= BreweryDAO;
/*Vérifier*/
const StyleDAO = require('../dao/styleDAO');
const Style = require('../model/style');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

class StyleController {

    constructor() {
        this.StyleDAO = new StyleDAO();
        this.common = new ControllerCommon();
    }

    //new
    findAll(res) {
        this.StyleDAO.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    //new
    findById(req, res) {
        let id = req.params.id;
        this.StyleDAO.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    //new
    create(req, res) {
        let style = new Style(req.body);
        return this.StyleDAO.create(style)
            .then(() => this.StyleDAO.findById(style.id))
            .then((style) => {
                res.status(201);
                res.json(style);
            })
            .catch(this.common.serverError(res));

    }

    //new
    deleteById(req, res) {
        let id = req.params.id;
        this.StyleDAO.deleteById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    //new
    update(req, res) {
        let style = new Style();
        /*categorie.id = req.body.id;
        categorie.catName = req.body.catName;
        categorie.lastMod = req.body.lastMod;*/
        style = Object.assign(style, req.body);


        return this.StyleDAO.update(categorie)
            .then(this.StyleDAO.findById(req.params.id))
            .then(() => this.StyleDAO.findById(style.id))
            .then((style) => {
                res.status(201);
                res.json(style);
            })
            .catch(err => console.log(err));

    };

}


module.exports = StyleController;
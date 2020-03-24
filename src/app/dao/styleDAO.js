const Style = require('../model/style');

const daoCommon = require('./commons/daoCommon');

class StyleDAO{

    constructor() {
        this.common = new daoCommon();
    }

    //new
    findAll() {
        const sqlRequest = "SELECT * FROM style";

        return this.common.findAll(sqlRequest)
            .then(rows => {
                const style = rows.map(row => new Style(row));
                return style;
            })
            .catch(err=> console.log(err));
    };

    //new
    findById(id) {
        let sqlRequest = "SELECT * FROM style WHERE id=$id";
        let sqlParams = {$id: id};
        //console.log(sqlParams);
        return this.common.findOne(sqlRequest, sqlParams)
            .then(row => new Style(row))

    };

    //new
    create(style) {
        const sqlRequest = "INSERT INTO style(" +
            "id,catId,styleName,lastMod) " +
            "VALUES ($id,$catId,$styleName,$lastMod)";
        const sqlParams = {
            $id = row.id,
            $catId = row.catId,
            styleName=row.styleName,
            lastMod=row.lastMod
        };
        //console.log(sqlParams, sqlRequest);
        return this.common.run(sqlRequest, sqlParams);
    };

    //new
    deleteById(id) {
        let sqlRequest = "DELETE FROM style WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    //new
    update(style) {
        let sqlRequest = "UPDATE style SET " +
            "catId = $catId " +
            "$styleName = styleName" +
            "$lastMod = lastMod"+
            "Where $id = id"

        let sqlParams = {
            $catId = style.catId,
            $styleName = style.styleName,
            $lastMod=style.lastMod,
            $id=style.id
            
        };
        return this.common.run(sqlRequest, sqlParams);
    };
}
module.exports = StyleDAO;
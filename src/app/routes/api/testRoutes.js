const express = require('express');
const router = express.Router();



router.get('/', function (req, res) {
    const user = {nom : 'remm',
        prenom : 'Jean-Francois',
        skills: ['android','java','humour']};
    res.json(user);
});



module.exports = router;
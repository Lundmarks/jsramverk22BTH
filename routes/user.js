var express = require('express');
var router = express.Router();

//GET
router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "GET // user.js"
        }
    };

    res.json(data);
});

//POST
router.post('/', function(req, res, next) {
    const data = {
        data: {
            msg: "POST 201 // user.js"
        }
    };

    res.status(201).json(data);
});

//PUT
router.put('/', function(req, res, next) {

    res.status(204).send();
});

//DELETE
router.delete('/', function(req, res, next) {

    res.status(204).send();
});


module.exports = router;
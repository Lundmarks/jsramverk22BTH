var express = require('express');
var router = express.Router();

// MongoDB
// const mongo = require("mongodb").MongoClient;
// const dsn =  "mongodb://localhost:27017/dottxt";
const database = require('../db/database');
const docsModel = require("../models/docs");



//GET
router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "GET // list.js"
        }
    };

    res.json(data);
});

router.get("/show", async (request, response) => {
    try {
        // let res = await findInCollection(dsn, "crowd", {}, {}, 0);
        const db = await database.getDb();
        const res = await database.findInCollection(db.dsn, "crowd", {}, {}, 0);
        await db.client.close();

        console.log(res);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});


module.exports = router;
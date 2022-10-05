var express = require('express');
var router = express.Router();

// MongoDB
const docsModel = require("../models/docs");



//GET
router.get(
    "/",
    async (req, res) => {
        const docs = await docsModel.getAllDocs();
        
        return res.json({
            data: docs
        });
    }
);

router.post(
    "/",
    async (req, res) => {
        const newDoc = req.body;

        // console.log("req body in routes docs.js");
        // console.log(req.body);

        const result = await docsModel.insertDoc(newDoc);
        
        return res.status(201).json( {data: result} );
    }
)

module.exports = router;
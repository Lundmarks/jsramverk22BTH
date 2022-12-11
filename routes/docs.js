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

// POST
router.post(
    "/",
    async (req, res) => {
        const savedDoc = req.body;
        const docs = await docsModel.getAllDocs();
        var alreadyExists = false;
         docs.forEach(async document => {
            if (document.name == req.body.name) {
                // User exists, overwrite document
                alreadyExists = true;
                const result = await docsModel.updateDoc(req.body);
                return res.status(200).json( {data: result} );
            }
        });


        if (!alreadyExists) {
            // New document
            const result = await docsModel.insertDoc(savedDoc);
            return res.status(201).json( {data: result} );
        }
    }
);


module.exports = router;
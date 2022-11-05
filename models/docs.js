const database = require('../db/database');
// const initDocs = require('../data/setup.json');

const docs = {
    getAllDocs: async function getAllDocs() {
        let db = await database.getDb();

        try {
            const allDocs = await db.collection.find().toArray();

            return allDocs;
        } catch (error) {
            return {
                errors: {
                    message: error.message,
                }
            };
        } finally {
            await db.client.close();
        }
    },
    getSpecificDoc: async function getSpecificDoc(documentName) {
        let db = await database.getDb();
        try {
            const foundDocument = await db.collection.findOne(
                {
                    "name" : documentName
                }
             );
             return foundDocument;
        } catch (e) {
            print(e);
        }
    },
    insertDoc: async function insertDoc(newDoc) {
        let db;

        try {
            db = await database.getDb();

            const result = await db.collection.insertOne(newDoc);
            
            return {
                ...newDoc,
                _id: result.insertedId,
            };

        } catch (error) {
            console.error(error.message);
        } finally {
            await db.client.close();
        }
    },
    updateDoc: async function updateDoc(documentData) {
        let db = await database.getDb();
        // let documentId = documentData._id;
        let documentName = documentData.name;
        let documentContent = documentData.docContent;
        try {
            db.collection.updateOne(
                { "name" : documentName },
                { $set: { "docContent" : documentContent} }
                );
        } catch (e) {
            // print(e);
            console.log(e);
        }
        try {
            const updatedDocument = await db.collection.findOne(
                {
                    "name" : documentName
                }
             );
             return updatedDocument;
        } catch (e) {
            // print(e);
            console.log(e);
        }
    },
    // init: async function init() {
    //     let db;

    //     try {
    //         db = await database.getDb();

    //         const result = await db.collection.insertMany(initDocs);
    //         console.log(`${result.insertedCount} documents were inserted`);

    //     } catch (error) {
    //         console.error(error.message);
    //     } finally {
    //         await db.client.close();
    //     }
    // }
}



module.exports = docs;
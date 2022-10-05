const database = require('../db/database');
const initDocs = require('../data/setup.json');

const docs = {
    getAllDocs: async function getAllDocs() {
        let db;

        try {
            db = await database.getDb();

            // const allDocs = await db.collection.find().toArray();
            const allDocs = await database.findInCollection(db.dsn, "docs", {}, {}, 0);

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
    init: async function init() {
        let db;

        try {
            db = await database.getDb();

            const result = await db.collection.insertMany(initDocs);
            console.log(`${result.insertedCount} documents were inserted`);

        } catch (error) {
            console.error(error.message);
        } finally {
            await db.client.close();
        }
    }
}



module.exports = docs;
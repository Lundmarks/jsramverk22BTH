// MongoDB
const mongo = require("mongodb").MongoClient;

// const config = require("./config.json");
require('dotenv').config()

const collectionName = "docs";

const database = {
    getDb: async function getDb () {
        
        let dsn =  `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@jsramverk.xuyhp.mongodb.net/dottxt?retryWrites=true&w=majority`;
        
        if (process.env.NODE_ENV === 'test') {
            collectionName = "test";
            // dsn =  `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@jsramverk.xuyhp.mongodb.net/dottxt-test?retryWrites=true&w=majority`;
        }
        const client  = await mongo.connect(dsn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = await client.db();
        const collection = await db.collection(collectionName);

        return {
            collection: collection,
            client: client,
            dsn: dsn
        };
    },

    findInCollection: async function findInCollection(dsn, colName, criteria, projection, limit) {
        const client  = await mongo.connect(dsn);
        const db = await client.db();
        const col = await db.collection(colName);
        const res = await col.find(criteria, projection).limit(limit).toArray();
    
        await client.close();
    
        return res;
    }
};


module.exports = database;
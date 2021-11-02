const mongoDB = require("mongodb"),
 MongoClient = mongoDB.MongoClient,
 mongoURL = "mongodb://localhost:27017",
 dbName = "jasonplaceholder",
 collectionName = "todos";
// no async
function showDocs(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        dbo = db.db(dbName)
        dbo.collection(collectionName).find({}).toArray((error, docs) => {
            if (error) throw error;
            res.send(docs);
            db.close()
        })
    })
}
// with async
function showDocsAsync(req, res) {
    MongoClient.connect(mongoURL)
        .then((db) => {
            dbo = db.db(dbName)
            dbo.collection(collectionName).find({}).toArray().then((docs) => {
                res.send(docs);
                db.close()
            })
        })
        .catch((err) => {
            console.error()
        })
}
// show with id name-not async
function showById(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const objId = { _id: mongoDB.ObjectId(req.params.id) };
        dbo = db.db(dbName)
        dbo.collection(collectionName).find(objId).toArray((error, docs) => {
            if (error) throw error;
            res.send(docs);
            db.close()
        })
    })
}
// async id 
function showByIdAsync(req, res) {
    MongoClient.connect(mongoURL)
        .then((db) => {
            const objId = { _id: mongoDB.ObjectId(req.params.id) };
            dbo = db.db(dbName)
            dbo.collection(collectionName)
                .find(objId)
                .toArray()
                .then((docs) => {
                    res.send(docs)
                    db.close()
                })
                .catch((err) => {
                    throw err
                })
        })
}
// not async post
function postDoc(req, res) {
    const client = req.body
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        dbo = db.db(dbName)
        dbo.collection(collectionName).insertOne(client, (err, doc) => {
            if (err) throw err;
            res.send(doc)
            db.close()
        })
    })
}
// async post
function postDocAsync(req, res) {
    const client = req.body
    MongoClient.connect(mongoURL)
        .then((db) => {
            dbo = db.db(dbName)
            dbo.collection(collectionName)
                .insertOne(client).then((doc) => {
                    res.send(doc)
                    db.close()
                })
        })
        .catch((err) => {
            throw err
        })
}
// delete not async
function deleteDoc(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const objId = { _id: mongoDB.ObjectId(req.params.id) };
        dbo = db.db(dbName)
        dbo.collection(collectionName).deleteOne(objId, (err, doc) => {
            if (err) throw err;
            res.sendStatus(200)
            db.close()
        })
    })
}
// asyanc delete
function deleteDocAsync(req, res) {
    MongoClient.connect(mongoURL)
        .then((db) => {
            const objId = { _id: mongoDB.ObjectId(req.params.id) }
            dbo = db.db(dbName)
            dbo.collection(collectionName).deleteOne(objId)
                .then((doc) => {
                    res.sendStatus(200)
                    db.close()
                })
        })
        .catch((err) => {
            throw err
        })
}
// upsdate doc  not async
function updateDoc(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const objId = { _id: mongoDB.ObjectId(req.params.id) };
        const update = req.body
        dbo = db.db(dbName)
        dbo.collection(collectionName).updateOne(objId, { $set: update }, (err, doc) => {
            if (err) throw err;
            res.send(doc)
            db.close()
        })
    })
}
// update async
function updateDocAsync(req, res) {
    MongoClient.connect(mongoURL)
        .then((db) => {
            const objId = { _id: mongoDB.ObjectId(req.params.id) };
            const update = req.body
            dbo = db.db(dbName)
            dbo.collection(collectionName).updateOne(objId, { $set: update }).then((doc) => {
                res.send(doc)
                db.close()
            })
        })
        .catch((err) => {
            throw error;
        })
}

module.exports = { showDocs, showById, postDoc, deleteDoc, updateDoc, showDocsAsync, updateDocAsync, showByIdAsync, postDocAsync, deleteDocAsync }

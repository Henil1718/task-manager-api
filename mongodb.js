// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID("6051b5132e6dde2eb4064172") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({ age: 20 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(users);
    // });

    // db.collection('users').find({ age: 20 }).count((error, count) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(count);
    // });

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'krenil',
    //     age: 20
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'yash',
    //         age: 21
    //     },
    //     {
    //         name: 'prince',
    //         age: 20
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documnets!');
    //     }

    //     console.log(result.ops);

    // });

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("6051b96d31ff943b6834d5b1")
    // }, {
    //     $set: {
    //         name: 'chacha'
    //     }
    // });

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("6051b96d31ff943b6834d5b1")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection('users').deleteMany({
    //     age:21
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });
});
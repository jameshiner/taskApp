// CRUD

const { MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1/27017';
const dbName = 'task-manager';

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
  },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to the db');
    }
    const db = client.db(dbName);
    db.collection('users').insertOne(
      {
        name: 'JJ',
        age: 26,
      },
      (err, res) => {
        if (err) {
          return console.log('Unable to insert user');
        }
        console.log(res.ops);
      },
    );
  },
);

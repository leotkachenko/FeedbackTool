const nconf = require('nconf')
const mongoose = require('mongoose');

nconf.argv().env().file({ file: 'db/config/keys.json' });

const host = nconf.get('mongoHost');
const port = nconf.get('mongoPort');
//let uri = `mongodb://mongo:27017`;
//let uri = `mongodb://${user}:${pass}@${host}:${port}`;
let uri = `mongodb://mongo:${port}`;
if (nconf.get('mongoDatabase')) {
  uri = `${uri}/${nconf.get('mongoDatabase')}`;
}
console.log(uri);

mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }, (err, db) => {
    if (err) {
      throw err;
    }
    console.log('Mongo connected')
  })
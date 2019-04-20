const mongoose = require('mongoose');

const uri = 'mongodb://localhost/noderest'
mongoose.connect(uri, { useNewUrlParser: true })

//mongoose.createConnection('mongodb://localhost/noderest', { useNewUrlParser: true });
//mongoose.connect('mongodb://localhost/noderest_rocketseat', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
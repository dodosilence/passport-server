/**
 * Created by tc949 on 2016/10/14.
 */
const mongoose = require('mongoose')
const config = require('../../config')
mongoose.Promise = global.Promise;

mongoose.connect(config.mongoUrl);

const db = mongoose.connection;
db.on('error', () => {
    console.error('mongoDb connnected error', 'boot')
});
db.once('open', function () {
    console.info('mongoDb connnected', 'boot')
});




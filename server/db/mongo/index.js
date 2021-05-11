const mongoose = require('mongoose');

const run = () => {
    const url = process.env.DB_MONGO_URL;
    mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    mongoose.connection.once('open', () => {
        console.log('conneted to database');
    });
}

module.exports = {
    run
}
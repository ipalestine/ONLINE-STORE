const mongoose = require('mongoose');
const uri = process.env.DB_MONGO_URL;


const run = () => {
    mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const db = mongoose.connection;

    db.on('open', () => {
        console.log('conneted to database');
    })

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = { run };
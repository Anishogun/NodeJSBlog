const mongoose = require('mongoose');
const db = mongoose.connection;

async function connect() {

    // Using try catch
    try {
        db = await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connnection " + db._connectionString + " with state: " + db._readyState + " as " + db.states[db._readyState]);
    } catch (error) {
        console.error.bind(console, 'connection error:')
        console.log("Connnection " + db._connectionString + " with state: " + db._readyState + " as " + db.states[db._readyState]);
    }

    // Using mongoose callback()
    // const db = mongoose.createConnection('mongodb://localhost:27017/f8_education_dev', {useNewUrlParser: true, useUnifiedTopology: true});
    // db.on('error', ()=>{
    //     console.error.bind(console, 'connection error:')
    //     console.log("Connnection " + db._connectionString + " with state: " + db._readyState + " as "+ db.states[db._readyState]);
    // });
    // db.on('connected', function() {
    //     console.log("Connnection " + db._connectionString + " with state: " + db._readyState + " as "+ db.states[db._readyState]);
    // });
}

module.exports = {
    connect
};

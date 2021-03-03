const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Course = new schema({
    name: {type: String, maxLenght: 255}, 
    description: {type: String, maxLenght: 600}, 
    image: {type: String, maxLenght:255},
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},
    video_id: { type: String,  maxLenght:20}
});

//Export the model
module.exports = mongoose.model('Course', Course);

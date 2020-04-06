//Author: Ujwal Vikas Chanda, uj225642@dal.ca
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Test Schema
const Test = new Schema({
    testId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    collection: 'test'
})

module.exports = mongoose.model('Test', Test)
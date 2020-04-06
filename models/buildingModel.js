//Author: Ujwal Vikas Chanda, uj225642@dal.ca
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Test Schema
const Building = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, {
    collection: 'buildings'
})

module.exports = mongoose.model('Building', Building)
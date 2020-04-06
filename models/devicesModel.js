//Author: Ujwal Vikas Chanda, uj225642@dal.ca
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Test Schema
const Device = new Schema({
    deviceId: {
        type: String,
        required: true,
        unique: true
    },
    deviceName: {
        type: String,
        required: true
    },
    deviceLink: {
        type: String,
        required: true
    },
    deviceCost: {
        type: String,
        required: true
    }
}, {
    collection: 'device'
})

module.exports = mongoose.model('Device', Device)
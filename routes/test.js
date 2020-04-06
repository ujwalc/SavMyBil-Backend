//Author: Ujwal Vikas Chanda, uj225642@dal.ca
const express = require('express')
const { body } = require('express-validator');
const Test = require('../models/TestModel') // user schema
const Device = require('../models/devicesModel') // user schema
const Building = require('../models/buildingModel')
const router = express.Router()



// Get all records
router.get('/', async(req, res) => {
    try {

        const search1 = await Device.find();
        res.json(search1);

    } catch (err) {
        res.json({ message: err });
    }

})

// Get all records
router.get('/status/', async(req, res) => {
    try {

        const search2 = await Building.find();
        res.json(search2);

    } catch (err) {
        res.json({ message: err });
    }

})
router.get('/status/:searchID', async(req, res) => {
    try {
        const searchID = req.params.searchID
        const search2 = await Building.find({
            name: { $regex: searchID, $options: 'i' }
        });
        res.json(search2);

    } catch (err) {
        res.json({ message: err });
    }

})
router.post('/status/', async(req, res) => {
    try {
        const name = req.body.name
        const status = req.body.status

        const search2 = await Building.insertMany({
            name: name,
            status: status
        })
        res.json(search2);

    } catch (err) {
        res.json({ message: err });
    }

})


module.exports = router
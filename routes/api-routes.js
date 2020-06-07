const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/test', (req, res) => {
    res.send('message from back end: success')
})

router.get('/all', (req, res) => {
    db.Item.find().then(items => res.send(items))
})

router.post('/new', (req, res) => {
    db.Item.create({ text: req.body.text}).then(item => res.send(item))
})



module.exports = router;
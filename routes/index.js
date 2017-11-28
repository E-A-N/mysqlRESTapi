const express = require('express');
const router = express.Router();
const task = require("../models/task");


const renderJson (err, rows) => {
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
}

/* GET home page. */
router.get('/:id?', (req, res, next) => {
    const userID = req.params.id;
    if (userID) task.getTaskById(userID,renderJson);
});

module.exports = router;

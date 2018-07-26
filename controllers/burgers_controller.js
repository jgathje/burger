var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js")

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject)
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([req.body.burger_name], function (result) {
        console.log("insert" + result)
        res.json({ id: result.insertId })
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.update([req.params.id], function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        };
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    burger.delete([req.params.id], function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})
module.exports = router;
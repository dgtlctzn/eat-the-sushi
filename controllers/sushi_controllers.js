const sushi = require("../models/sushi");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    sushi.selectAll((data) => {
        res.render("index", {sushi: data});
    })
})

router.post("/api/sushi", (req, res) => {
    sushi.insertOne(["sushi_name", "eaten"], req.body.sushi_name, (result)=> {
        res.json({ id: result.insertId });
    })
})

router.put("/api/sushi/:id", (req, res) => {
    sushi.updateOne({eaten: true}, {id: req.params.id}, ()=> {
        res.status(200).end();
    })
})

module.exports = router;
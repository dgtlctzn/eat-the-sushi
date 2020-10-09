const sushi = require("../models/sushi");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    sushi.selectAll((data) => {
        res.render("index", {sushi: data});
    })
})

router.post("/api/sushi", (req, res) => {
    // console.log([req.body.sushi_name, req.body.eaten])
    sushi.insertOne(["sushi_name", "eaten"], req.body.sushi_name, (result)=> {
        res.json({ id: result.insertId });
    })
})













module.exports = router;
const sushi = require("../models/sushi");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    sushi.selectAll((data) => {
        res.render("index", {sushi: data});
    })
})















module.exports = router;
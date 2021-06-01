const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("register a user");
});

module.exports = router;

const router = require("express").Router(),
    { countUsers } = require("../controllers/users")

router 
    .get("/usercount", countUsers)

module.exports = router
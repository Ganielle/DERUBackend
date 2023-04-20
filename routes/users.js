const router = require("express").Router(),
    { countUsers, userlist } = require("../controllers/users")

router 
    .get("/usercount", countUsers)
    .get("/userlist", userlist)

module.exports = router
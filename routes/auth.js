const router = require("express").Router(),
    { login, save, createuser } = require("../controllers/auth")

router 
    .post("/login", login)
    .post("/save", save)
    .post("/createuser", createuser)

module.exports = router
const router = require("express").Router()
const { browse, find, save } = require("../controllers/hospitals")

router
    .get("/browse", browse)
    .get("/:name/find", find)
    .post("/save", save)

module.exports = router
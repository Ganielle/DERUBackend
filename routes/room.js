const router = require("express").Router()
const { browse, save, update } = require("../controllers/room")

router
    .get("/browse", browse)
    .post("/save", save)
    .put("/:id/update", update)

module.exports = router
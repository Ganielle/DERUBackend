const router = require("express").Router()
const { browse, update } = require("../controllers/chat")

router
    .get("/:id/browse", browse)
    .post("/:id/send", update)

module.exports = router
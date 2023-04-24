const router = require("express").Router(),
{ browse, userBrowse, save } = require("../controllers/pcr")

router
    .get("/:id/browse", userBrowse)
    .get("/browse", browse)
    .post("/save", save)

module.exports = router
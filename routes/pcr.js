const router = require("express").Router(),
{ browse, userBrowse, save, update } = require("../controllers/pcr")

router
    .get("/:id/browse", userBrowse)
    .get("/browse", browse)
    .post("/save", save)
    .put("/:id/update", update)

module.exports = router
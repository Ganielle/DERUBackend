const router = require("express").Router(),
{ browse, userBrowse, save, update, countPCR } = require("../controllers/pcr")

router
    .get("/:id/browse", userBrowse)
    .get("/browse", browse)
    .post("/save", save)
    .put("/:id/update", update)
    .get("/count", countPCR)

module.exports = router
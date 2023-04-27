const router = require("express").Router(),
{ browse, userBrowse, save, update, countPCR, selfPCR } = require("../controllers/pcr")

router
    .get("/:id/browse", userBrowse)
    .get("/browse", browse)
    .post("/save", save)
    .put("/:id/update", update)
    .get("/count", countPCR)
    .get("/:id/self", selfPCR)

module.exports = router
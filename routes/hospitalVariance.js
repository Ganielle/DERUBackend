const router = require("express").Router()
const { browse, find, save, findPagination, update } = require("../controllers/hospitalVariance")

router
    .get("/browse", browse)
    .get("/:name/find", find)
    .post("/save", save)
    .get("/variantlist", findPagination)
    .put("/:id/update", update)

module.exports = router
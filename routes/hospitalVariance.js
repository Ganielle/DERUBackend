const router = require("express").Router()
const { browse, find, save, findPagination } = require("../controllers/hospitalVariance")

router
    .get("/browse", browse)
    .get("/:name/find", find)
    .post("/save", save)
    .get("/variantlist", findPagination)

module.exports = router
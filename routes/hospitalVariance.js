const router = require("express").Router()
const { browse, find, save, findPagination, update, deletevariant } = require("../controllers/hospitalVariance")

router
    .get("/browse", browse)
    .get("/:name/find", find)
    .post("/save", save)
    .get("/variantlist", findPagination)
    .put("/:id/update", update)
    .delete("/:id/delete", deletevariant)

module.exports = router
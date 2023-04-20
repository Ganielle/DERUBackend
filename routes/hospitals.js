const router = require("express").Router()
const { browse, find, save, countHospitals, findPagination } = require("../controllers/hospitals")

router
    .get("/browse", browse)
    .get("/:name/find", find)
    .get("/counthospital", countHospitals)
    .get("/listhospital", findPagination)
    .post("/save", save)

module.exports = router
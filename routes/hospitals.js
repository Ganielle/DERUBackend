const router = require("express").Router()
const { browse, find, save, countHospitals, findPagination, approvehospital,
    listapprove } = require("../controllers/hospitals")

router
    .get("/browse", browse)
    .get("/:userId/find", find)
    .get("/counthospital", countHospitals)
    .get("/listhospital", findPagination)
    .put("/:id/approve", approvehospital)
    .post("/save", save)
    .get("/listapprove", listapprove)

module.exports = router
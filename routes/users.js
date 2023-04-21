const router = require("express").Router(),
    { countUsers, userlist, approveUser, declineUser } = require("../controllers/users")

router 
    .get("/usercount", countUsers)
    .get("/userlist", userlist)
    .put("/:id/approve", approveUser)
    .delete("/:id/decline", declineUser)

module.exports = router
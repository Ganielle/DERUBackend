const Users = require("../models/users")

exports.countUsers = (req, res) => {
    Users.count()
    .then(user => res.json({ message: "success", data: user}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}
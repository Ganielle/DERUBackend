const Users = require("../models/users")
const Hospital = require("../models/hospitals")

exports.countUsers = (req, res) => {
    Users.count()
    .then(user => res.json({ message: "success", data: user}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.userlist = (req, res) => {
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }
    Users.find({approve: req.query.approve, roleId: req.query.roleId})
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({'updatedAt': -1})
    .then(user => {
        Users.countDocuments()
        .then(count => {
            const totalPages = Math.ceil(count / 10);
            res.json({ message: "success",
            userData: user, pages: totalPages})
        })
    })
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.approveUser = (req, res) => {
    Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.json({message: "success"})
    )
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.declineUser = (req, res) => {
    Users.findByIdAndDelete(req.params.id)
    .then(user => {
        Hospital.findOneAndDelete({userId: user._id})
        .then(data => res.json({message: "success"}))
        .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
    })
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}
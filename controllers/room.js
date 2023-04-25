const Room = require("../models/room")

exports.browse = (req, res) =>{
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }
    Room.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({'createdAt': -1})
    .then(user => {
        Room.countDocuments()
        .then(count => {
            const totalPages = Math.ceil(count / 10);
            res.json({ message: "success", data: user, pages: totalPages})
        })
        .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
    })
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.save = (req, res) => {
    Room.create(req.body)
    .then(content => res.json({ message: "success", data: content}))
    .catch(error => res.status(400).json({ message: "bad-request"}))
}
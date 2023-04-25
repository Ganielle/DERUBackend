const Room = require("../models/room")
const Chat = require("../models/chat")

exports.browse = (req, res) =>{
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }
    Room.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({'createdAt': -1})
    .populate({
        path: "handler",
        select: "username"
    })
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
    Room.create(req.body.data)
    .then(content => {
        Chat.create({chatroom_id: content._id})
        .then(responseData => res.json({ message: "success", data: content}))
    })
    .catch(error => res.status(400).json({ message: "bad-request", content: error}))
}

exports.update = (req, res) =>
    Room.findByIdAndUpdate(req.params.id, req.body)
    .then(item => res.json({ message: "success" }))
    .catch(error => res.status(400).json({ error: error.message }));
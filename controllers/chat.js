const Chat = require("../models/chat")

exports.browse = (req, res) =>{
    Chat.find({chatroom_id: req.params.id})
    .sort({'createdAt': -1})
    .populate({
        path: "chatroom_id",
        select: "nameOfPatient",
        populate: {
            path: "handler",
            select: "fname lname"
        }
    })
    .then(chat => res.json({ message: "success", data: chat}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.update = (req, res) => {
    Chat.updateOne({chatroom_id: req.params.id},
        { $push: { history: req.body.data }})
    .then(chat => res.json({ message: "success"}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

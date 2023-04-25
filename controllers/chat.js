const Chat = require("../models/chat")

exports.browse = (req, res) =>{
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }
    Chat.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({'createdAt': -1})
    .then(user => {
        Chat.countDocuments()
        .then(count => {
            const totalPages = Math.ceil(count / 10);
            res.json({ message: "success", data: user, pages: totalPages})
        })
        .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
    })
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.update = (req, res) => {
    
}

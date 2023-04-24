const PCR = require("../models/pcr")

exports.browse = (req, res) =>{
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }

    PCR.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({'createdAt': -1})
    .populate({
        path: "hospital",
        select: "display_name"
    })
    .then(pcr => {
        PCR.countDocuments()
        .then(count => {
            const totalPages = Math.ceil(count / 10);
            res.json({ message: "success", data: pcr, pages: totalPages})
        })
        .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
    })
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.userBrowse = (req, res) =>{
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }

    PCR.find({hospital: req.params.id})
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({'createdAt': -1})
    .then(pcr => {
        PCR.countDocuments({hospital: req.params.id})
        .then(count => {
            const totalPages = Math.ceil(count / 10);
            res.json({ message: "success", data: pcr, pages: totalPages})
        })
        .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
    })
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.save = (req, res) =>{
    PCR.create(req.body.data)
    .then(item => {
        res.json({message: "success"})
    } )
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}
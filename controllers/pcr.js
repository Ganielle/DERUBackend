const PCR = require("../models/pcr")
const Hospital = require("../models/hospitals")

exports.countPCR = (req, res) => {
    PCR.count()
    .then(user => res.json({ message: "success", data: user}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.countReferral = (req, res) => {
    PCR.find({withReferral: req.query.withReferral })
    .count()
    .then(user => res.json({ message: "success", data: user}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.countLostConsciousness = (req, res) => {
    PCR.find({lostOfConsciousness: req.query.lostOfConsciousness })
    .count()
    .then(user => res.json({ message: "success", data: user}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

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

exports.selfPCR = (req, res) => {
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }

    var ObjectId = require('mongodb').ObjectId; 
    var objId = new ObjectId(req.params.id)
    Hospital.find({userId: objId})
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({'createdAt': -1})
    .then(hospitalData => {
        PCR.find({hospital: hospitalData[0]._id})
        .populate({
            path: "hospital",
            select: "display_name"
        })
        .then(pcrData => {
            PCR.countDocuments({hospital: hospitalData[0]._id})
            .then(count => {
                const totalPages = Math.ceil(count / 10);
                res.json({ message: "success", data: pcrData, pages: totalPages})
            })
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

exports.update = (req, res) =>{
    PCR.findByIdAndUpdate(req.params.id, req.body.data, { new: true })
    .then(data => res.json({ message: "success"}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}
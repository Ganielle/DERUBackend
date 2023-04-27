const Hospital = require("../models/hospitals")

//  entity/
exports.browse = (req, res) => 
    Hospital.find()
        .then(items => res.json(items))
        .catch(error => res.status(400).json({error: error.message}));

//  entity/:name/find
exports.find = (req, res) =>
    Hospital.findOne({ userId: req.params.userId })
    .populate({
        path: "userId",
        select: "username email fname mname lname approve"
    })
    .populate({
        path: "variance",
        select: "display_name"
    })
    .then(items => res.json(items))
    .catch(error => res.status(400).json({error: error.message}));

//  entity/save
exports.save = (req, res) => 
    Hospital.create(req.body)
        .then(item => res.json(`${item.display_name} saved successfully`))
        .catch(error => res.status(400).json({error: error.message}));

exports.countHospitals = (req, res) => {
    Hospital.count()
    .then(user => res.json({ message: "success", data: user}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.approvehospital = (req, res) => {
    Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true})
    .then(data => res.json({message: "success"}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.update = (req, res) =>
Hospital.findByIdAndUpdate(req.params.id, req.body.data)
    .then(item => res.json({message: "success"}))
    .catch(error => res.status(400).json({ error: error.message }));

exports.findPagination = (req, res) =>{
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }
    Hospital.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({'createdAt': -1})
    .populate({
        path: "userId",
        select: "username email fname mname lname approve"
    })
    .populate({
        path: "variance",
        select: "display_name"
    })
    .then(user => {
        Hospital.countDocuments()
        .then(count => {
            const totalPages = Math.ceil(count / 10);
            res.json({ message: "success", data: user, pages: totalPages})})
        })
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}

exports.listapprove = (req, res) =>{
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }
    Hospital.find({ approve: true })
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({'regularBeds': -1, 'covidBeds': -1})
    .populate({
        path: "userId",
        select: "username email fname mname lname approve"
    })
    .populate({
        path: "variance",
        select: "display_name"
    })
    .then(user => {
        Hospital.countDocuments()
        .then(count => {
            const totalPages = Math.ceil(count / 10);
            res.json({ message: "success", data: user, pages: totalPages})})
        })
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}
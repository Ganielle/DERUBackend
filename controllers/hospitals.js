const Hospital = require("../models/hospitals")

//  entity/
exports.browse = (req, res) => 
    Hospital.find()
        .then(items => res.json(items))
        .catch(error => res.status(400).json({error: error.message}));

//  entity/:name/find
exports.find = (req, res) =>
    Hospital.findOne({ userId: req.params.userId })
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

exports.findPagination = (req, res) =>{
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }
    Hospital.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .then(user => res.json({ message: "success", data: user}))
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}
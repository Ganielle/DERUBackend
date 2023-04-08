const Hospital = require("../models/hospitals")

//  entity/
exports.browse = (req, res) => 
    Hospital.find()
        .then(items => res.json(items))
        .catch(error => res.status(400).json({error: error.message}));

//  entity/:name/find
exports.find = (req, res) =>
    Hospital.findOne({ display_name: req.params.name })
    .then(items => res.json(items))
    .catch(error => res.status(400).json({error: error.message}));

//  entity/save
exports.save = (req, res) => 
    Hospital.create(req.body)
        .then(item => res.json(`${item.display_name} saved successfully`))
        .catch(error => res.status(400).json({error: error.message}));
const Variance = require("../models/hospitalVariance")

//  entity/
exports.browse = (req, res) =>
    Variance.find()
        .then(items => res.json(items))
        .catch(error => res.status(400).json({error: error.message}));

//  entity/:name/find
exports.find = (req, res) =>
    Variance.findOne({ display_name: req.params.name })
        .then(items => res.json(items))
        .catch(error => res.status(400).json({error: error.message}));


exports.save = (req, res) =>
    Variance.create(req.body)
        .then(vari => res.json(`${vari.display_name} saved successfully`))
        .catch(error => res.status(400).json({ error: error.message }));
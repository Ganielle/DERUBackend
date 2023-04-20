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

exports.findPagination = (req, res) =>{
    const pageOptions = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10
    }
    Variance.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .then(user => {
        Variance.countDocuments()
        .then(count => {
            const totalPages = Math.ceil(count / 10);
            console.log(totalPages)
            res.json({ message: "success", data: user, pages: totalPages})
        })
    })
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}
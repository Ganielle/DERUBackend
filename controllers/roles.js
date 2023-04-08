const Role = require("../models/roles")

// entity/
exports.browse = (req, res) =>
  Role.find()
    .then(items => res.json(items))
    .catch(error => res.status(400).json({ error: error.message }));

// entity/:name/find
exports.find = (req, res) =>
  Role.findOne({ name: req.params.name })
    .then(item => res.json(item))
    .catch(error => res.status(400).json({ error: error.message }));

// entity/:id/update
exports.update = (req, res) =>
  Role.findByIdAndUpdate(req.params.id, req.body)
    .then(item => res.json(item))
    .catch(error => res.status(400).json({ error: error.message }));

// entity/migration
exports.migrate = (req, res) => {
  const roles = [
    {
        _id: "629a98a5a881575c013b5325",
        display_name: "Administrator",
        name: "admin",
    },
    {
        _id: "629a98a5a881575c013b5326",
        display_name: "RHU",
        name: "rhu",
    },
    {
        _id: "629a98a5a881575c013b5327",
        display_name: "Staff",
        name: "staff",
    },
    {
        _id: "629a98a5a881575c013b5328",
        display_name: "Hospital Staff",
        name: "hospitalStaff",
    },
    {
        _id: "629a98a5a881575c013b5329",
        display_name: "Rescue Team Staff",
        name: "rescueTeamStaff",
    },
    {
        _id: "629a98a5a881575c013b5330",
        display_name: "Patient",
        name: "patient",
    },
  ];
  roles.map(role => {
    Role.create(role);
  });

  res.json("Role migration created");
};
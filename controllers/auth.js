const Users = require("../models/users"),
    generateToken = require("../config/generateToken"),
    bcrypt = require("bcryptjs"),
    Hospital = require("../models/hospitals")

// const encrypt = async password => {
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password, salt);
// };

//  login
exports.login = (req, res) => {
    const {email, password} = req.body;

    Users.findOne({ $or: [{ email }, {username: email }] })
    .then(async user => {
        if (user && (await user.matchPassword(password))){
            let userData = await Users.findById({ _id: user._id })
            .select("-password")
            .populate({
                path: "roleId",
                select: "display_name name"
            })
            userData.token = generateToken(userData._id);
            res.json({ message: "success", data: userData })
        }
        else{
            res.json({ message: "failed", error: "E-mail/Username and password does not match" })
        }
    })
    .catch(err => res.status(400).json({ message: "bad-request", error: err.message }))
}

exports.save = (req, res) =>
  Users.create(req.body)
    .then(user => res.json(`${user._id} saved successfully`))
    .catch(error => res.status(400).json({ error: error.message }));

exports.createuser = (req, res) =>{
    Users.create({
        roleId: req.body.roleId,
        username: req.body.username,
        password: req.body.password,
        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname,
        email: req.body.email,
        approve: false,
        token: ""
    })
    .then(user => {
        Hospital.create({
            userId: user._id,
            display_name: req.body.display_name,
            landline: req.body.landline,
            cellphone: req.body.cellphone,
            address: req.body.address,
            regularBeds: req.body.regularBeds,
            covidBeds: req.body.covidBeds,
            variance: req.body.variance,
            approve: false
        })
        .then(hospital => res.json({message: "success"}))
        .catch(error => res.status(400).json({message:"failed", error: error.message }))
    })
    .catch(error => res.status(400).json({message:"bad-request", error: error.message }))
}
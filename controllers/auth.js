const Users = require("../models/users"),
    generateToken = require("../config/generateToken"),
    bcrypt = require("bcryptjs")

// const encrypt = async password => {
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password, salt);
// };

//  login
exports.login = (req, res) => {
    const {email, password} = req.query;

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
            res.json({ error: "E-mail and password does not match" })
        }
    })
    .catch(err => res.status(400).json({ error: err.message }))
}

exports.save = (req, res) =>
  Users.create(req.body)
    .then(user => res.json(`${user._id} saved successfully`))
    .catch(error => res.status(400).json({ error: error.message }));

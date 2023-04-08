const mongoose = require("mongoose")
bcrypt = require("bcryptjs");

const usersModels = new mongoose.Schema(
    {
        roleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Roles"
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 5
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 6
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            minlength: 5,
        },
        token: {
            type: String,
        },
    }
)

usersModels.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

usersModels.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Users = mongoose.model("Users", usersModels);

module.exports = Users;

const mongoose = require("mongoose")

const roomModels = mongoose.Schema(
    {
        status:{
            type: String,
            required: true
        },
        handler:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        nameOfPatient:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        contactNumber:{
            type: String
        },
        natureOfAccident: {
            type: String
        },
        location:{
            type: String
        },
        landmarks:{
            type: String
        },
        image: [{
            type: String
        }]
    },
    {
        timestamps: true
    }
)

const Room = mongoose.model("Room", roomModels)

module.exports = Room
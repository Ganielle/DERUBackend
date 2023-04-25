const mongoose = require("mongoose")

const hospitalModels = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        display_name:{
            type: String,
            required: true
        },
        landline:{
            type: Number,
            required: true
        },
        cellphone:{
            type: Number,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        regularBeds:{
            type: Number,
            required: true
        },
        covidBeds:{
            type: Number,
            required: true
        },
        approve: {
            type: Boolean
        },
        variance:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Variance"
        }]
    },
    {
        timestamps: true
    }
)

const Hospital = mongoose.model("Hospital", hospitalModels)

module.exports = Hospital
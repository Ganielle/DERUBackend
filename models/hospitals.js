const mongoose = require("mongoose")

const hospitalModels = mongoose.Schema(
    {
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
        variance:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Variance"
        }]
    }
)

const Hospital = mongoose.model("Hospital", hospitalModels)

module.exports = Hospital
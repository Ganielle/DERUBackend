const mongoose = require("mongoose")

const varianceModels = new mongoose.Schema(
    {
        display_name:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Variance = mongoose.model("Variance", varianceModels);

module.exports = Variance
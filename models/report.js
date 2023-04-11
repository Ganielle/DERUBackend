const mongoose = require("mongoose")

const reportModels = new mongoose.Schema(
    {
        chatId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat"
        },
        files:[{
            type: String
        }],
        details: {
            type: String,
            required: true
        },
        assignee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    }
)

const Report = mongoose.model("Report", reportModels)

module.exports = Report
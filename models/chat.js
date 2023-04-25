const mongoose = require("mongoose")

const chatModels = mongoose.Schema(
    {
        chatroom_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        },
        history:[{
            sender: { "type": String, "required": true },
            content: { "type": String, "required": true }
        }]
    },
    {
        timestamps: true
    }
)

const Chat = mongoose.model("Chat", chatModels)

module.exports = Chat

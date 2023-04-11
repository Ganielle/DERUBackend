const mongoose = require("mongoose")

const chatModels = mongoose.Schema(
    {
        chatroom_name:{
            type: String,
            required: true
        },
        handler:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        patient:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        closed:{
            type: Boolean
        },
        history:[{
            sender: { "type": String, "required": true },
            content: { "type": String, "required": true }
        }]
    }
)

const Chat = mongoose.model("Chat", chatModels)

module.exports = Chat

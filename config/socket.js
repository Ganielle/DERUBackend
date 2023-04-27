const socket = io => {
    io.on("connection", function(socketio){
        socketio.on("join_lobby", async (data) => {
            await socketio.join(data.roomId)
        })

        socketio.on("join_room", async (data) => {
            await socketio.join(data.roomId)
            io.to(data.roomId).emit("joined-room", {
                user: data.name
            })
        })

        socketio.on("leave-lobby", () => {
            socketio.leave("lobby")
            socketio.emit("leave-lobby-response", {
                message: "success"
            })
        })

        socketio.on("leave-room", (data) => {
            socketio.leave(data.roomId)
            socketio.emit("leave-room-response", {
                message: "success"
            })
        })

        //  PATIENT CREATED ROOM
        socketio.on("create-room", async (data) => {
            //  SERVER SEND TO HIGHER ACCOUNT DASHBOARD LIST
            io.in("lobby").emit("create-room-data",
                { message: "success" })
        })

        socketio.on("approve-chat", async (data) =>{
            io.to(data._id).emit("response-approve-chat", {
                message: "success", data: "active"
            })
        })

        socketio.on("send-message", async (data) => {
            
            socketio.broadcast.emit("receive-message", {
                message: "success", data: data.content
            })
        })
    })
}

module.exports = socket;
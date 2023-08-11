const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const http = require("http");
const cors = require("cors");
const path = require("path")
const { Server } = require("socket.io");
require('dotenv').config()

const app = express()

const corsConfig = {
    // origin: ["http://localhost:3000", "http://localhost:8080/", "http://localhost:8080"],
    origin: ["https://deru.onrender.com/", "https://deru.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"], // List only` available methods
    credentials: true, // Must be set to true
    allowedHeaders: [
        "Origin",
        "Content-Type",
        "X-Requested-With",
        "Accept",
        "Authorization",
    ], 
    credentials: true// Allowed Headers to be received
}

app.use(cors(corsConfig))
const server = http.createServer(app);

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected")
})
.catch(err => console.log(err))

app.use(bodyParser.json())

const io = new Server(server, {
    cors: corsConfig, // Pass configuration to websocket
});
  //  Socket.io
require("./config/socket")(io);

// Routes
require("./routes")(app);

const port = process.env.PORT || 5000; // Dynamic port for deployment
server.listen(port, () => console.log(`Server is running on port: ${port}`));
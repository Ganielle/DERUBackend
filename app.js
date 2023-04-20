const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");
const path = require("path")
require('dotenv').config()

const app = express()

const corsConfig = {
    origin: ["http://localhost:3000", "http://localhost:8080"],
    methods: ["GET", "POST", "PUT", "DELETE"], // List only` available methods
    credentials: true, // Must be set to true
    allowedHeaders: [
        "Origin",
        "Content-Type",
        "X-Requested-With",
        "Accept",
        "Authorization",
    ], // Allowed Headers to be received
}

app.use(cors(corsConfig))

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected")
})
.catch(err => console.log(err))

app.use(bodyParser.json())

// Routes
require("./routes")(app);

const port = process.env.PORT || 5000; // Dynamic port for deployment
app.listen(port, () => console.log(`Server is running on port: ${port}`));
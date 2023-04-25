
const routers = app => {
    console.log("routers here");
    //  EXAMPLE ROUTES
     app.use("/auth", require("./auth"));
     app.use("/roles", require("./roles"))
     app.use("/variance", require("./hospitalVariance"))
     app.use("/hospitals", require("./hospitals"))
     app.use("/users", require("./users"))
     app.use("/pcr", require("./pcr"))
     app.use("/room", require("./room"))
     app.use("/chat", require("./chat"))
}

module.exports = routers
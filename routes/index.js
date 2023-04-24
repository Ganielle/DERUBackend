
const routers = app => {
    console.log("routers here");
    //  EXAMPLE ROUTES
     app.use("/auth", require("./auth"));
     app.use("/roles", require("./roles"))
     app.use("/variance", require("./hospitalVariance"))
     app.use("/hospitals", require("./hospitals"))
     app.use("/users", require("./users"))
     app.use("/pcr", require("./pcr"))
}

module.exports = routers
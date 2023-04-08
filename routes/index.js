
const routers = app => {
    console.log("routers here");
    //  EXAMPLE ROUTES
     app.use("/auth", require("./auth"));
     app.use("/roles", require("./roles"))
     app.use("/variance", require("./hospitalVariance"))
     app.use("/hospitals", require("./hospitals"))
}

module.exports = routers
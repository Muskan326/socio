const appConfig = require("../config/appConfig")
const controller=require("../controller/controller")

let setRouter = (app) => {
    app.post('/dailydata',controller.dailydata)
    app.post('/distance',controller.distance)
}// end setRouter function 

module.exports = {
    setRouter: setRouter
}
import express from "express"
import router from "./router/router"
const App = express()
const port = 3000
App.use("/api", router)
App.listen(port, ()=>{
    console.log("server up")
})
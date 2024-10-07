import express from "express"
import router from './router.js'
import cors from "cors"
const app =express();
app.use(cors())
app.use(express.json())
app.use("/api",router)
app.listen(3000,()=>{
    console.log("server is listening at PORT 3000")

})
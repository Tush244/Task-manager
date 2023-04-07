const express = require("express")
const connectDatabase=require("./db")

const taskRoutes = require("./routes/taskRoute")
    const cors = require("cors")
 const app = express()
 // middleware
 app.use(express.json())
 app.use(cors({
     origin:["http://localhost:3000",]
    }))
    
    app.use(taskRoutes)

//Routes
app.get("/",(req,res) =>{
    res.send("Home Pge")
});






connectDatabase();
 const PORT = process.env.PORT || 5000
 
 app.listen(PORT,()=>{
    console.log(`server runningcd on ${PORT}`);
 });

const mongoose =require("mongoose")

const connectDatabase =()=>{

mongoose.connect( "mongodb://127.0.0.1:27017/Task", 
{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
    console.log(`mongo db connected with Server: ${data.connection.host}` );


})
}



module.exports=connectDatabase
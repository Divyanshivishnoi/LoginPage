const mongoose = require("mongoose");
const schema = mongoose.Schema();


const mongo_url=process.env.MONGO_CONN;

mongoose.connect(mongo_url)
.then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log("MongoDB connection error: ", err);
})


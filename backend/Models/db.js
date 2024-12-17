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










// const mongoose=require('mongoose');
// uri="mongodb+srv://divyanshi_user1:vishnoi_div@cluster0.yinve.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0"

// const connectDB=()=>{
//     return mongoose.connect(uri);
// };


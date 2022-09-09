const mongoose =require('mongoose');

const DB="mongodb://localhost:27017/MernCRUD";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Connection is Start")).catch((err)=>{console.log(err.message);})
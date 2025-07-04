const mongoose=require ('mongoose');
const colors=require ('colors');

const connectDb=async()=>{
    try{
 await mongoose.connect(process.env.MONGO_URL)
 console.log(`Connecting to  mongoose database ${mongoose.connection.host}`.bgMagenta)
    }catch(error){
 console.log(`dabatbase error" ${error}`.bgRed.white)
    }
}
module.exports=connectDb;
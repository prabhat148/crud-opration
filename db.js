const mongoose =require("mongoose")

//making connection to the  mogoose db 

const connectDb = async()=>{
    try{
        const cnn = await mongoose.connect(process.env.MONGOOSE_URL,)
        console.log('mongodb connected : ${cnn.connection.host}')
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDb;
const mongoose=require("mongoose")

async function connectDb() {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("mongoose database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDb;
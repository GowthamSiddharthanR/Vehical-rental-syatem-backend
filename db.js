const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
function connectDB(){

    mongoose.connect('mongodb+srv://gowthamsiddharthan88:zHJkI0TKxj6FVnT6@cars.ipc8w.mongodb.net/gowthamcars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })

}

connectDB()

module.exports = mongoose

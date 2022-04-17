const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect(
        //"mongodb://127.0.0.1:27017/psc"
        "mongodb+srv://sumit:sumit@cluster0.hqmjr.mongodb.net/houses?retryWrites=true&w=majority"
    )
}

module.exports=connect 
const mongoose = require("mongoose")


const DBconnection = async()=>{
    await mongoose.connect(process.env.DATABASE)
    .then(()=>{
        console.log("Connection success");
    }).catch((err)=> console.log(err)
    )
}

module.exports = DBconnection;
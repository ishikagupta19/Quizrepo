const express = require("express")
const app = express()
const dotenv = require("dotenv")
const DBconnection = require("./connection/conn")
const PORT =process.env.PORT || 5000;
// const route = require("./routes/router")

app.use(express.json());


dotenv.config({path: './.env'}); 
app.use(require('./routes/router'));



if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

DBconnection()
.then(()=>{
    app.listen(PORT , ()=>{
        console.log(`Server is running at ${PORT}`)
    })
})



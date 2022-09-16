const mongoose = require("mongoose")


const quesSchema = new mongoose.Schema({
    id:{
        type: Number,
        unique: true,
        required: true
    },
    ques: {
        type: String,
        required: true,
        
    },
    op1: {
        type: String,
        required: true,
        
    },
    op2: {
        type: String,
        required: true,
        
    },
    op3: {
        type: String,
        required: true,
        
    },
    op4: {
        type: String,
        required: true,
        
    },
   
    
    
})


const Ques = mongoose.model(' QUES', quesSchema);

module.exports = Ques;
const router = require("express").Router()
const mongoose = require("mongoose")
const User = require("../models/userModel")
const Ques = require("../models/quesSchema")


// router.post("/login" ,  async(req,res) =>{
//     const {name  , email, contact , profession , password , cpassword} = req.body;

//     if(!name || !email || !contact || !profession || !password || !cpassword){
//        return res.status(422).json({error: "Some fields are missing"});
//     }

//     try { 
//         const exist = await User.findOne({email: email})
//         if(exist){
//           return  res.status(400).json({error: "Email already exist"});
//         }

//         const user = new User({name, email, phone, work, password, cpassword});

//         const userRegister= await user.save();
//          if(userRegister){
//         return res.status(201).json({message: "User registered successfully"});
//      }else {
//         return res.status(500).json({ error: "Failed to register"});
//      }

//     } catch (error) {
//        console.log(error);
//     }
// })

router.post("/addques" ,  async(req,res) =>{
    const {id, ques, op1, op2, op3, op4} = req.body;

    if(!id || !ques || !op1 || !op2 || !op3 || !op4){
       return res.status(422).json({error: "Some fields are missing"});
    }

    try { 
        

        const mcq = new Ques({id, ques, op1, op2, op3, op4});

        const Question= await mcq.save();
         if(Question){
        return res.status(201).json({message: "Question added successfully"});
     }else {
        return res.status(500).json({ error: "Failed to add"});
     }

    } catch (error) {
       console.log(error);
    }
})



router.get("/showques", async(req,res) => {
 try {

   const Question = await Ques.findOne({id:req.id});
   console.log(Question);
   res.send(req.Question);

 } catch (error) {
   console.log(error);
 }
});

module.exports= router;
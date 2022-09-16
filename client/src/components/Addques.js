import React from 'react'
import swal from 'sweetalert';
import { Axios } from 'axios';
import "./Addques.css"
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Showques from './Showques';




const Addques = () => {
  

  const navigate = useNavigate();
  const [add, setAdd] = useState({
    id:"", ques:"", op1:"",op2:"",op3:"",op4:""
  });
  let name, value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
  
    setAdd({...add, [name] : value});
  }

  const Addedques = async(e) =>{
    e.preventDefault();

    const {id, ques, op1, op2, op3, op4} = add;
    const res = await axios.post("/addques",{
      id,
      ques , 
      op1 ,
      op2 ,
      op3 ,
      op4
    }) 
    // const data = res.json();
    console.log(res.data.data);
    if(res.status === 400 || !res){
      swal({
        title: "ERROR!",
        text: "Please enter all details",
        icon: "warning",
        dangerMode: true,
      })
      return console.error();
     
    } else{
      
      swal({
        icon: "success",
        text:"Question added"
      });
      navigate("/Showques");
    }
  }

  return (<>
    <center><h1>Addques</h1></center>
  
    <div class="screen-body-item">
          <div class="app-form" >
          
          <form class="app-form123" method="POST">

          <div class="app-form-group">
              <input class="app-form-control" type="text" name="id" id="id" autoComplete="off"
              value={add.id}
              onChange={handleInputs}
                          placeholder="ID" />
            </div>
         
            <div class="app-form-group">
              <input class="app-form-control" type="text" name="ques" id="ques" autoComplete="off"
              value={add.ques}
              onChange={handleInputs}
                          placeholder="Add Question" />
            </div>
            
            <div class="app-form-group">
              <input class="app-form-control" type="op1" name="op1" id="op1" autoComplete="off"
              value={add.op1}
              onChange={handleInputs}
                          placeholder="Enter option 1" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" type="op2" name="op2" id="op2" autoComplete="off"
              value={add.op2}
              onChange={handleInputs}
                          placeholder="Enter option 2" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" type="op3" name="op3" id="op3" autoComplete="off"
              value={add.op3}
              onChange={handleInputs}
                          placeholder="Enter option 3" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" type="op4" name="op4" id="op4" autoComplete="off"
              value={add.op4}
              onChange={handleInputs}
                          placeholder="Enter option 4" />
            </div>
            <div class="app-form-group buttons">
              <input className="app-form-button" type="submit" name="signup" id="signup" value="Add" onClick={Addedques}/>
              {/* <button class="app-form-button">SEND</button> */}
            </div>
            <div class="app-form-group buttons">
              <input className="app-form-button" type="submit" name="signup" id="signup" value="Show added question" onClick={Showques}/>
              
              {/* <button class="app-form-button">SEND</button> */}
            </div>
           
            </form>
          </div>
        </div>  
 
    </>
  )
}

export default Addques;
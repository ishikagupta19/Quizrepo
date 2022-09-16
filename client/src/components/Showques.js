import axios from 'axios';
import React, { useEffect , useState } from 'react';
import {useNavigate} from "react-router-dom";

 

const Showques = () => {


  const navigate = useNavigate();
  const [userData, setUserData] = useState({});


  const callQuesPage = async () => {
    try{
        const res = await fetch('/showques', {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        });

        const data = await res.json();
        console.log(data);
        setUserData(data);
        

        if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
        }

    } catch (err) {
        console.log(err);
        navigate('/addques');
    }
  }

  useEffect(() =>{
    callQuesPage();
  }, []);


  return <>
 
  <div className="container emp-profile">
    <form method="GET">
      

      <div className="row">
     

        <div className="col-md-8 pl-5 about-info">
          <div className="tab-content profile-tab" id='myTabContent'>
            <div className="tab-pane fade show active" id='home' role="tabpanel" aria-labelledby="home-tab">
              
              <div className="row mt-3">
                <div className="col-md-6">
                  <label> Question</label>
                </div>
                <div className="col-md-6">
                  <p>{userData.ques}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label> Option 1</label>
                </div>
                <div className="col-md-6">
                  <p>{userData.op1}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label> Option 2</label>
                </div>
                <div className="col-md-6">
                  <p>{userData.op2}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label> Option 3</label>
                </div>
                <div className="col-md-6">
                  <p>{userData.op3}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label> Option 4</label>
                </div>
                <div className="col-md-6">
                  <p>{userData.op4}</p>
                </div>
              </div>
              
              
            </div>

            
          </div>
        </div>

      </div>

    </form>
  </div>


  </>;
};

export default Showques;

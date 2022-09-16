import {React, useState} from 'react';
import './Admin.css';
import {MenuItem, TextField, Button} from '@mui/material';
import Categories from '../../Data/Categories';
import {useNavigate} from "react-router-dom";
import Login from "../../components/Login/Login"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import swal from 'sweetalert';

const Home = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const loginUser = async(e) =>{
      e.preventDefault();

      {
        navigate("/login");
      }
      
    }
    const loginUser1 = async(e) =>{
        e.preventDefault();
  
        {
          navigate("/adminlogin");
        }
        
      }
  

  return (
    <div className='controls'>
        <button className="btn btn-dark"  variant='contained'
            color='primary'
            size='large'
            style={{width: 285, height:150, fontSize:25}}
            onClick={loginUser}>
            Login as Student       
            </button>
            <button className="btn btn-dark"   variant='contained'
            color='primary'
            size='large'
            style={{width: 285, height:150, fontSize:25}}
            onClick={loginUser1}>
            Login as Admin      
            </button>
    </div>
  )
}

export default Home;
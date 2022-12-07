import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({SaveUserData}) {

  const[User,setUser]=useState({
    "email":"",
    "password":"",
  });
  const [errorMessage, seterrorMessage] = useState('');
  const [errorslist, seterrorslist] = useState([]);
  let navigate=useNavigate();
  let SubmitFormData=async(e)=>{
   e.preventDefault();
   let ValidationResponse=ValidateFormData();
   console.log(ValidationResponse);
   if (ValidationResponse.error){
seterrorslist(ValidationResponse.error.details)
   }
   else{

   }
   let GoToHome=()=>{
    navigate("/");
  }
  let {data}=await axios.post(' https://sticky-note-fe.vercel.app/signin',User);
  
  if(data.message==='success'){
    localStorage.setItem('token',data.token);
    SaveUserData();
    GoToHome();
    navigate("/");
  }
  else{
    seterrorMessage(data.message);
  }
  };
  let ValidateFormData=()=>{
    const schema=Joi.object({
      email:Joi.string().required().email({tlds:{allow:['com','net']}}),
      password:Joi.string().required().pattern(new RegExp(/^[a-z]{5}[0-9]{3}$/))
    })
   return schema.validate(User,{abortEarly:false});
  }
  let getInputValue=(e)=>{
    let myUser={...User};
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
    console.log(myUser);
  }

  



  return (
    <>
 <div className=' w-75 m-auto py-5'>
 <h2>Login Form</h2>
 {errorslist.map((error,index)=>
 <div key={index} className='alert alert-danger p-2'>{error.message}</div>
 )}
{errorMessage? <div className='alert alert-danger p-2'>{errorMessage}</div>:''}

 <form onSubmit={SubmitFormData}> 
  <div className='input-data my-2'>
    <label htmlFor="email">Email</label>
    <input onChange={getInputValue} type="email" className='form-control my-2'name="email" />
  </div>
  <div className='input-data my-2'>
    <label htmlFor="password">password</label>
    <input onChange={getInputValue} type="password" className='form-control my-2'name="password" />
  </div>
  <button className='btn btn-info my-3 float-end'>Login</button>
  <div className='clear-fix'></div>
 </form>
 
 </div>
 </>
  )
 }



import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Profile() 
{

  const navigate=useNavigate();
  const[user,setUser]=useState(null);
  
  const  fetchProfile = async()=>{
  const token = localStorage.getItem("token");
  
   if (!token) {
     alert("please login first");
     navigate("/login");
     return;
   }

   try {
    
    const res = await axios.get("http://localhost:7000/api/profile",{
   
     headers:{
      "auth-token":token,
     },});

     if(res.data.success){

      setUser(res.data.data);
     }
     else{
      alert(res.data.message);
     }
  
  } 
  
  catch (error) 
  {
     console.log(error)
     alert("Failed to fetch profile")
   }

  };
   useEffect(()=>{
    fetchProfile();
   },[]);


   const handleLogout=()=>{
    localStorage.removeItem("token");
    alert("Logout suceesfully")
    navigate('/login')

   };

  return (
    <div style={{padding:"20px"}}>
      <h1>My profile</h1>
      {!user ?(
      <p>Loading Profile</p>
      ):(
     <div>

      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
      <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
     
  <div>
    <button onClick={()=> navigate("/createtweet")}>Go to tweet</button>
    <button onClick={handleLogout}>logout</button>
    </div>
  </div>
  )}
    </div>
  );
}

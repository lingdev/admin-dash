import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Login.css"
import { useHistory,NavLink } from 'react-router-dom'
const Login = () => {
    const [data, setData] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const API_URL = `https://634ecf294af5fdff3a67b6f6.mockapi.io/admindata/`
  const [popup,setPopup] = useState("hide")

  
  const getData = async () => {
    const apigetData = await axios.get(API_URL)
    setData(apigetData.data);
  }

  console.log(data,"data");
  useEffect(() => {

    getData()

  }, [])

 const  check = () =>{

    if(user == 'admin@123' && password == '123'){
        history.push({
            pathname: '/dashboard',
          
            
            })
            window.location.reload()
    }

    data.map((e) =>{
      if(e.username==user && e.password == password) {
        console.log("sasdsad");
        history.push({
            pathname: '/userdash',
          
            state: {  
              id: e,
            },
          }); 
        window.location.reload()

       

      } 
      else{
        setPopup("login-popup")
            setTimeout(()=>setPopup("hide"),3000)
    }

    })

 }
//   const popupset = () =>{
//     setPopup("login-popup")
//     setTimeout(()=>setPopup("hide"),3000)
//   }
  return (
    <div className='cover'>
      <h1>Login</h1>
      <input onChange={(e) => setUser(e.target.value)} type="text" placeholder='username' />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
      <div className='login-btn'onClick={check}>login</div>
     
      <div className='alt-login'>
        
        <div className='signup'>Sign UP</div>
        
      </div>
        <div className={popup}>
          <h3>login Failed</h3>
          <p>username and password incorrect</p>

        </div>
    </div>
  )
}

export default Login
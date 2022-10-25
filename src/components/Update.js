import React,{useEffect,useState} from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import "./update.css"

 



const Update = () => {
  const history = useHistory()
  const[username,setusername] = useState("")
  const[email,setemail] = useState("")
  const[id,setid] = useState("")
  const[password,setpassword] = useState(false)
  const API_URL= `https://634ecf294af5fdff3a67b6f6.mockapi.io/admindata/`
  
  useEffect(() =>{
    setusername(localStorage.getItem('username'))
    setemail(localStorage.getItem('email'))
    setid(localStorage.getItem('id'))
    console.log(localStorage.getItem('id'))
    setpassword(localStorage.getItem('password'))
 },[])

 const updatedata = async () => {
  await axios.put(API_URL +id,{
    username,
      email,
      password
  })
  history .push('/dashboard')
  window.location.reload()
 }
  return (
    <div>
        
  <Form className='update'>
      <Form.Field>
        
        <input type='text' placeholder='Username' value={username} onChange={event =>setusername(event.target.value)}/>
      </Form.Field>
      <br/>
      <Form.Field>
       
        <input type='email' placeholder='Email' value={email} onChange={event =>setemail(event.target.value)}/>
      </Form.Field>
      <br/>
      <Form.Field>
        
        <input type='password' placeholder='Password' value={password} onChange={event =>setpassword(event.target.value)}/>
      </Form.Field>
      <br/>
      <Button className='update-btn'  onClick={updatedata} >Update</Button>

  </Form>

    </div>
  )
}

export default Update
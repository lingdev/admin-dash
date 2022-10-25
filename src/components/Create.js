import axios from 'axios'
import React ,{useState} from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'
import "./create.css"


const Create = () => {
    const API_URL= `https://634ecf294af5fdff3a67b6f6.mockapi.io/admindata`
   const[username,setUsername] = useState("")
   const[email,setEmail] = useState("")
   const[password,setPassword] = useState("")
   const history = useHistory()

   const passData = async () => {

    console.log(username,email,password);
    await axios.post(API_URL ,{
      username,
      email,
      password
    })
    history .push('/login')
    window.location.reload()
    
   }
  return (
    <div className='cover'>

     
  <Form className=''>
      <Form.Field>
        
        <input type='text' placeholder='Name' value={username} onChange={event =>setUsername(event.target.value)}/>
      </Form.Field>
      <br/>
      <Form.Field>
      
        <input type='email' placeholder='Email'  value={email} onChange={event =>setEmail(event.target.value)}/>
      </Form.Field>
      <br/>
      <Form.Field>
        
        <input type='password' placeholder='Password' value={password} onChange={event =>setPassword(event.target.value)}/>
      </Form.Field>
  <br/>
      <Button className='create-btn' onClick={passData}>Create</Button>

  </Form>

    </div>
  )
}

export default Create
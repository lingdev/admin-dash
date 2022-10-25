import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import "./dashboard.css"




const Dashboard = () => {
  const [data, setData] = useState("")
  const API_URL = `https://634ecf294af5fdff3a67b6f6.mockapi.io/admindata/`
 
  const history = useHistory()
  const deletData = async (id) =>{
    console.log(id,"fdsf");
    await axios.delete(API_URL +id)
    getData()

  }
  const UpdateData = ({username,email,password,id}) =>{
    localStorage.setItem('id',id)
    localStorage.setItem('username',username)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
   
    history.push({
      pathname: '/update' })
      window.location.reload()

  }


  const getData = async () => {
    const apigetData = await axios.get(API_URL)
    setData(apigetData.data);
  }

  console.log(data,"data");
  useEffect(() => {

    getData()

  }, [])


  return ( 



    <div className='dashboard'>
      <table>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {
          data?.length > 0 && data.map(apidata => (
            <tr key={apidata.id}>
              <td>{apidata.username}</td>
              <td>{apidata.email}{apidata.id}</td>
              <td>{apidata.password }</td>
              <td><Button className='dash-btn' onClick={() => deletData(apidata.id)}>Delete</Button></td>
              <td><Button className='dash-up-btn' onClick={() => UpdateData(apidata)}>Update</Button></td>
            </tr>
          ))
        }
       
      </table>
      </div>
   
    
  )
}

export default Dashboard


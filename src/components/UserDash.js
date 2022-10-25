import React from 'react'
import { useLocation,useHistory } from 'react-router-dom';
import "./userdash.css"


const UserDash = () => {
    const history = useHistory()

    const UpdateData = ({username,email,password,id}) =>{
        console.log(id,"id");
        localStorage.setItem('id',id)
        localStorage.setItem('username',username)
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
       
        history.push({
          pathname: '/update' })
          window.location.reload()
    
      }
    const location = useLocation();
    console.log(location.state)
    const data = location.state.id
  return (
    <div className='userdash'>
    <div className='alt-userdash'>Username : {data.username}</div>
    <div className='alt-userdash'> Email : {data.email}</div>
    <div className='alt-userdash'>Password : {data.password}</div>
    <button className='user-btn' onClick={() => UpdateData(data)}>Update</button>
    </div>
  
  )
}

export default UserDash
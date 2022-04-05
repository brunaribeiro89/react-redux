import React from 'react';
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {changePassword, changeUser } from '../features/users/userSlice'




const Login = () => {
   const  [ name, setName] = useState('')
   const  [ password, setPassword] = useState('')

   const dispatch = useDispatch();

   const handleInputChange = (event) => {
        event.preventDefault();

        dispatch(changeUser(name))
        dispatch(changePassword(password))
        
        console.log(changeUser(name))
        console.log(changePassword(password))
   
   }
   return(
    <form>
    <label>
      Nome
      <input
        data-testid="form-field"
        type="text"
        placeholder="name"
        value = {name}
        onChange={(event) => setName(event.target.value)}
      />
     
    </label>
    <label>
      Password
      <input
        data-testid="form-field"
        type="password"
        placeholder="password" 
        value = {password}
        onChange={(event) => setPassword(event.target.value)}    
      />
    </label>
    <button data-testid="form-btn" onClick={handleInputChange}>
     Login
    </button>
  </form>
   )
}
export default Login
import React from 'react';
import { useSelector } from 'react-redux';
import {selectUser } from '../features/users/userSlice';




const User = () => {

    const {name} =  useSelector(selectUser) 
    const {password} = useSelector(selectUser)
    console.log('name: ', name)
    console.log('pasword: ', password)

    return (
        <div>
        <h1>Usuário: {name}</h1>
        <h1>Password: {password}</h1>
        </div>
    )
}
export default User
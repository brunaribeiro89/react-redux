//slicer é uma coleção de lógicas de reducer e actions
import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  name: '',
  password: ''
}

export  const user = createSlice({
    //nome do meu reducer
    name: 'user',
    initialState, 
        reducers: {
           changeUser : (state, action) => {
              state.name = action.payload
      
           },
           changePassword: (state, action) => {
              state.password = action.payload
        
        },
      },
})
export const {changeUser, changePassword} =  user.actions

export const selectUser = ((state) => state.user)


export default user.reducer
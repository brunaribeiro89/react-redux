import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice'




//configurar o store do redux
export const store =  configureStore({
    reducer: {
        //nome do reducer e qual reducer ele representa
        user: userReducer
    },
})



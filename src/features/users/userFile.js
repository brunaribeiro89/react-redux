const redux = require('redux')
const createStore = redux.createStore


//action type(tipo de ação a ser executada)
const inputNameUser = 'TAKE_INPUT'
const inputPassword = 'TAKE_PASSWORD'

//actions
function takeValueInput(user) {
   return {
       type: inputNameUser,
       info:'pega valor do input name ',
       payload: user
   }
  
}

function takeValuePassword(password) {
    return {
        type:inputPassword,
        info:'pega valor do password',
        payload: password
    }
}

const initialState = {
    user: '',
    password: ''
}



//Reducers
function userReducer(prevState = initialState, action) {
    switch (action.type){
     case  inputNameUser:
         return {
             ...prevState,
             user: action.payload,
         }
      case inputPassword:
          return{
            ...prevState,
            password: action.password,
          }
       default:
           return prevState  
    }
}

//sotre
const store = createStore(userReducer)
console.log('Initial state', store.getState())
//dispara as actions
store.dispatch(takeValueInput('Bruna'))
console.log('Initial state', store.getState())
store.dispatch(takeValuePassword('1234'))
console.log('Initial state', store.getState())
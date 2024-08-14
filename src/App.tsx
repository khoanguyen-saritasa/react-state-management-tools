import { produce } from 'immer'
import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { User } from './models/user'
import { ReduxDemo } from './ReduxDemo'
import { store } from './store'

function App() {
  
  const [user, setUser] = useState(new User({id: 1, name: "Khoa"}))


  const changeName = () => {
    setUser(produce((user) => {
      user.name = "Khoa Nguyen"
    }))
  }

  return (
   <Provider store={store}>
      <p>{user.name}</p>
      <button type='button' onClick={changeName}>Change name</button>
      <ReduxDemo/>
   </Provider>
  )
}

export default App

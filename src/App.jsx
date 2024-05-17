import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {


  return (
      <Provider store={store} >
        <div className="App text-white">
          <h1>Redux Todo</h1>
          <AddTodo />
          <Todos />
        </div>
      </Provider>
  )
}

export default App

import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../Slices/Todo'
let store = configureStore({
    reducer: TodoReducer
})

export default store
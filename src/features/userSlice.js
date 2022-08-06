import  {createSlice} from '@reduxjs/toolkit'
import appApi from '../services/appApi'

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addNotifications: (state, {payload}) => {}
        resetNotifications: (state, {payload}) => {}
    }
})
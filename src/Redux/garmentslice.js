import {createSlice} from '@reduxjs/toolkit'

const gstate = {
    numberofitems : 20
}

 export const garmentslice = createSlice({
    name: 'garment',
    initialState: gstate,
    reducers: {
        addtocart : (state,action)=>{
            state.numberofitems = action.payload }
    }
})

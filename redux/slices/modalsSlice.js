import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   cities: { show: false },
   orderThx: {show: false},
   mftv: {show: false},
}


export const modalsSlice = createSlice( {
   name: 'modals',
   initialState,
   reducers: {
      showModal( state, action ) {
         state[action.payload.modal].show = action.payload.bool
         state[action.payload.modal].props = action.payload.props || null
      }
   }
} )

export const { showModal } = modalsSlice.actions
export default modalsSlice.reducer
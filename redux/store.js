import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import modalsSlice from "./slices/modalsSlice";
// import orderSlice from "./slices/orderSlice";


export const store = configureStore( {
   reducer: {
      modals: modalsSlice,
      // order: orderSlice,
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware( {
         serializableCheck: false,
      } )
} )

export const wrapper = createWrapper( () => store, { debug: false } )
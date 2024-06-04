import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice';

const store=configureStore(
    {
        reducer:{
              users:AuthSlice.reducer
        }
    }
);

export default store;